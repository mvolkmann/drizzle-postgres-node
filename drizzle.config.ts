import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.mjs",
  out: "./src/migrations",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    database: "drizzle-demo",
  },
} satisfies Config;
