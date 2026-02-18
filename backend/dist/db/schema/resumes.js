import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
//@ts-ignore
import { users } from "./users";
export const resumes = pgTable("resumes", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
        .references(() => users.id)
        .notNull(),
    title: text("title"), // e.g., "Software Engineer Resume"
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
//# sourceMappingURL=resumes.js.map