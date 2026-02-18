import express from "express"
import authRouter from "./routes/auth.route.js"
import cors from "cors"
import resumeUploadRouter from "./routes/resumeUpload.route.js"
import { startCron } from "./services/cron.js"
import { runJobFetch } from "./services/jobFetcher.js"
import jobRouter from "./routes/job.route.js"

const app = express()
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/step-1", resumeUploadRouter)
app.use("/api/v1/step-2", jobRouter)

// startCron()

export default app