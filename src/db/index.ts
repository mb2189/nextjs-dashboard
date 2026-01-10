import { loadEnvConfig } from "@next/env";
import postgres from "postgres";

// Use Next to load env files: .env.local, .env.development, etc.
loadEnvConfig(process.cwd());

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error('DATABASE_URL is missing!');
}

export const sql = postgres(databaseUrl);
