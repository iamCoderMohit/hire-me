import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
//@ts-ignore
import { resumes } from "./resumes";
export const resumeRawText = pgTable("resume_raw_text", {
    id: uuid("id").defaultRandom().primaryKey(),
    resumeId: uuid("resume_id")
        .references(() => resumes.id)
        .notNull(),
    rawText: text("raw_text").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
});
//# sourceMappingURL=resumeRaw.js.map