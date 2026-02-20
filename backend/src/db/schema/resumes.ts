import { pgTable, uuid, text, timestamp, jsonb, vector } from "drizzle-orm/pg-core";

import { users } from "./users.js";

export const resumes = pgTable("resumes", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  title: text("title"), // e.g., "Software Engineer Resume",
  filePath: text("file_path").notNull(),
  rawText: text("raw_text").notNull(),
  structuredData: jsonb("structured_data").notNull(),
  embedding: vector("embedding", { dimensions: 2048 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
