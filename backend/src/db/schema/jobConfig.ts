import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  integer
} from "drizzle-orm/pg-core"

export const jobSearchConfigs = pgTable("job_search_configs", {
  id: uuid("id").defaultRandom().primaryKey(),

  // Adzuna country code (in, us, gb, etc.)
  country: text("country").notNull(),

  // Search keyword (backend developer, etc.)
  keyword: text("keyword").notNull(),

  // Optional location filter (Bangalore, Remote, etc.)
  location: text("location"),

  // Optional salary filter
  salaryMin: integer("salary_min"),

  // Whether cron should process this config
  isActive: boolean("is_active").default(true).notNull(),

  // Track last time we fetched jobs for this config
  lastFetchedAt: timestamp("last_fetched_at"),

  // For debugging / control
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})
