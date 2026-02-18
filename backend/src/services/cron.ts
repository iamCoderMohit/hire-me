import cron from "node-cron"
import { runJobFetch } from "./jobFetcher.js"

export function startCron() {
  // Every 8 hours
  cron.schedule("0 */8 * * *", async () => {
    console.log("Cron triggered...")
    await runJobFetch()
  })

  console.log("Cron scheduled: every 8 hours")
}