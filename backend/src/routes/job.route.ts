import express from "express";
import { runJobFetch } from "../services/jobFetcher.js";
import { errorResponse, successResponse } from "../utils/apiResponse.js";
import { verifyUser } from "../middleware/auth.js";
import { db } from "../db/drizzle.js";
import { and, sql } from "drizzle-orm";

const jobRouter = express.Router();

jobRouter.post("/admin/run-job-fetch", async (req, res) => {
  await runJobFetch();
  successResponse(res, { data: "done" });
});

jobRouter.get("/job-match/:resumeId", verifyUser, async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await db.query.resumes.findFirst({
      where: (resumes, { eq, and }) =>
        and(
          eq(resumes.id, resumeId as string),
          eq(resumes.userId, req.user.id),
        ),
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    const resumeEmbedding = resume.embedding

const embeddingString = `[${resumeEmbedding!.join(",")}]`;

const matchedJobs = await db.execute(sql`
  SELECT *,
  1 - (embedding <=> ${embeddingString}::vector) AS similarity
  FROM jobs
  WHERE is_active = true
  ORDER BY embedding <=> ${embeddingString}::vector
  LIMIT 20;
`);

    successResponse(res, matchedJobs.rows);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Can't find jobs");
  }
});

export default jobRouter;
