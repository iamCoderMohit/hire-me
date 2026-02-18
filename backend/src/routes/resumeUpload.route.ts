import express from "express";
import { verifyUser } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { errorResponse, successResponse } from "../utils/apiResponse.js";
import { v4 as uuidv4 } from "uuid";
import { supabaseAdmin } from "../config/supabase.js";
import { db } from "../db/drizzle.js";
import { resumes } from "../db/schema/resumes.js";
import { extractPdfText } from "../utils/extractText.js";
import { parseResumeWithAI } from "../lib/aiTextParser.js";
import { users } from "../db/schema/users.js";
import { eq } from "drizzle-orm";
import { jsonToText } from "../utils/jsonToText.js";
import { parseJsonWithAI } from "../lib/aiEmbeddings.js";

const resumeUploadRouter = express.Router();

resumeUploadRouter.post(
  "/upload-resume",
  verifyUser,
  upload.single("file"),
  async (req, res) => {
    try {
      const { title } = req.body;

      if (!title) {
        errorResponse(res, "title for resume not provided");
      }
      if (!req.file) {
        errorResponse(res, "No file provided");
      }

      const userId = req.user.id;

      const fileExt = req.file!.originalname.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;

      const filePath = `${userId}/${fileName}`;

      //upload to supabase storage
      const { error } = await supabaseAdmin.storage
        .from("resumes")
        .upload(filePath, req.file!.buffer, {
          contentType: req.file!.mimetype,
          upsert: false,
        });

      if (error) throw error;

      const rawText = await extractPdfText(req.file?.buffer!);

      if (!rawText) {
        errorResponse(res, "Can't parse pdf");
      }
      const json = await parseResumeWithAI(rawText);

      if (!json) {
        errorResponse(res, "Can't create json from raw text");
      }

      const text = jsonToText(json)
      const embedding = await parseJsonWithAI(text)
      if(!embedding){
        errorResponse(res, "failed to generate resume embeddings")
      }

      //@ts-ignore
      await db.insert(resumes).values({
        userId,
        title,
        filePath,
        rawText,
        embedding,
        structuredData: json,
      });

      successResponse(res, filePath);
    } catch (error) {
      console.error(error);
      errorResponse(res, "can't upload resume");
    }
  },
);

resumeUploadRouter.post(
  "/test",
  verifyUser,
  async (req, res) => {
    try {
      const { id } = req.user;

      const resume = await db
        .select()
        .from(resumes)
        .where(eq(resumes.userId, id))
        .limit(1);

        const ans = await parseJsonWithAI(resume[0]?.structuredData as JSON)

      successResponse(res, resume);
    } catch (error) {
      console.error(error);
      errorResponse(res, "cant be done");
    }
  },
);

export default resumeUploadRouter;
