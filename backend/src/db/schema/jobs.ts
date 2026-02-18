import {
  pgTable,
  uuid,
  text,
  timestamp,
  varchar,
  boolean,
  index,
  vector
} from "drizzle-orm/pg-core";

export const jobs = pgTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),

  // External API ID (Adzuna / etc.)
  externalId: varchar("external_id", { length: 255 })
      .notNull()
      .unique(),

  title: varchar("title", { length: 500 }).notNull(),
  description: text("description").notNull(),

  company: varchar("company", { length: 255 }),
  location: varchar("location", { length: 255 }),

  jobType: varchar("job_type", { length: 100 }), // internship, full-time, contract

  source: varchar("source", { length: 100 }), // adzuna, manual, recruiter
  redirectUrl: text("redirect_url"),

  isActive: boolean("is_active").default(true),

  embedding: vector("embedding", { dimensions: 2048 }),

  postedAt: timestamp("posted_at"),
  expiresAt: timestamp("expires_at"),

  createdAt: timestamp("created_at").defaultNow(),
});
