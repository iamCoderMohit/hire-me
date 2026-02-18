import { jsonb, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
//@ts-ignore
import { resumes } from "./resumes";
export const resumeStructured = pgTable("resume_structured", {
    id: uuid("id").defaultRandom().primaryKey(),
    resumeId: uuid("resume_id")
        .references(() => resumes.id)
        .notNull(),
    structuredData: jsonb("structured_data").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
});
//# sourceMappingURL=resumeStructured.js.map