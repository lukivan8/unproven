import { config } from "dotenv";
config({ path: ".env" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { posts } from "./schema";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

const db = drizzle(neon(process.env.DATABASE_URL));

async function main() {
    await db.delete(posts);
    await db.insert(posts).values([
        {
            title: "Welcome to Unproven",
            content: "This is your first seeded post, rendered from Neon via Drizzle.",
        },
        {
            title: "Server-first rendering",
            content: "This page is a React Server Component calling tRPC directly.",
        },
        {
            title: "Edit me",
            content: "Run `pnpm db:seed` to reset the seed data.",
        },
    ]);
    console.log("Seeded posts.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
