import express from "express"
import { runJobFetch } from "../services/jobFetcher.js"
import { successResponse } from "../utils/apiResponse.js"

const jobRouter = express.Router()

jobRouter.post("/admin/run-job-fetch", async (req, res) => {
  await runJobFetch()
  successResponse(res, {data: "done"})
})

export default jobRouter