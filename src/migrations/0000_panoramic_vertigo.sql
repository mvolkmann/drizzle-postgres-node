CREATE TABLE IF NOT EXISTS "dogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"breed" text,
	"owner_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "owners" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
