import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.mjs";

const dbName = "drizzle-demo";
const dbPrefix = "postgres://postgres:adminadmin@0.0.0.0:5432";
const connectionString = dbPrefix + "/" + dbName;
const client = postgres(connectionString);

export const db = drizzle(client, { schema });
