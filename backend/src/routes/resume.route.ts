import express from "express";
import { verifyUser } from "../middleware/auth.js";
import { supabaseAdmin } from "../config/supabase.js";
import { errorResponse, successResponse } from "../utils/apiResponse.js";

const resumeRouter = express.Router();

resumeRouter.get("/", verifyUser, async (req, res) => {
  try {
    const { id } = req.user;

    const { data, error } = await supabaseAdmin
      .from("resumes")
      .select("*")
      .eq("user_id", id)
      .order("created_at", { ascending: false });

    if (error) {
      errorResponse(res, "Error getting resumes");
    }
    const resumesWithUrl = data!.map((resume) => {
      const { data: publicUrlData } = supabaseAdmin.storage
        .from("resumes")
        .getPublicUrl(resume.file_path);

      return {
        ...resume,
        url: publicUrlData.publicUrl,
      };
    });

    successResponse(res, resumesWithUrl);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Error getting resumes");
  }
});

export default resumeRouter;
