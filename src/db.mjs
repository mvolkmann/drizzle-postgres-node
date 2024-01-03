import { drizzle } from "drizzle-orm/postgres-js";
import pg from "pg";
import * as schema from "./schema.mjs";

const dbName = "drizzle-demo";
const dbPrefix = "postgres://postgres:adminadmin@0.0.0.0:5432";
const connectionString = dbPrefix + "/" + dbName;
const client = new pg.Client({ connectionString });
await client.connect();

export const db = drizzle(client, { schema });
