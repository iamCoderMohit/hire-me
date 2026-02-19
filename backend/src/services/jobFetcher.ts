import fetch from "node-fetch";
import { eq } from "drizzle-orm";
import { jobSearchConfigs } from "../db/schema/jobConfig.js";
import { db } from "../db/drizzle.js";
import { jobs } from "../db/schema/jobs.js";
import { jobToText } from "../utils/jobToText.js";
import { parseJsonWithAI } from "../lib/aiEmbeddings.js";

const APP_ID = process.env.ADZUNA_APP_ID;
const APP_KEY = process.env.ADZUNA_APP_KEY;

export async function runJobFetch() {
  console.log("Starting job fetch...");

  const configs = await db
    .select()
    .from(jobSearchConfigs)
    .where(eq(jobSearchConfigs.isActive, true));

  for (const config of configs) {
    let page = 1;
    let shouldContinue = true;

    while (shouldContinue && page <= 2) {
      // limit pages for safety
      const baseUrl = `https://api.adzuna.com/v1/api/jobs/${config.country}/search/${page}`;

      const params = new URLSearchParams({
        app_id: APP_ID as string,
        app_key: APP_KEY as string,
        what: config.keyword,
        where: config.location || "",
        results_per_page: "20",
        sort_by: "date",
      });

      const response = await fetch(`${baseUrl}?${params}`);
      const data = await response.json();

      for (const job of data.results) {
        if (
          config.lastFetchedAt &&
          new Date(job.created) <= new Date(config.lastFetchedAt)
        ) {
          shouldContinue = false;
          break;
        }

        const jobText = jobToText({
          title: job.title,
          company: job.company?.display_name,
          location: job.location?.display_name,
          description: job.description,
        });

        const embedding = await parseJsonWithAI(jobText);

        await db
          .insert(jobs)
          .values({
            externalId: job.id,
            title: job.title,
            company: job.company?.display_name,
            location: job.location?.display_name,
            description: job.description,
            createdAt: new Date(job.created),
            redirectUrl: job.redirect_url,
            embedding,
          })
          .onConflictDoNothing({ target: jobs.externalId });
      }

      page++;
    }

    await db
      .update(jobSearchConfigs)
      .set({ lastFetchedAt: new Date() })
      .where(eq(jobSearchConfigs.id, config.id));
  }

  console.log("Job fetch completed.");
}
