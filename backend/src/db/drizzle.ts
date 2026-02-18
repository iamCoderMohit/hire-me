import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
//   connectionString: "postgresql://postgres.csurksgxzbhhoyzwdsvn:mXMQMpaEUCy1HJ3b@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres",
connectionString: process.env.SUPABASE_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);
