import { z } from "zod";
import { desc, eq } from "drizzle-orm";
import { posts } from "@/db/schema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postsRouter = createTRPCRouter({
    list: publicProcedure.query(async ({ ctx }) => {
        return ctx.db.select().from(posts).orderBy(desc(posts.createdAt));
    }),

    byId: publicProcedure
        .input(z.object({ id: z.number().int().positive() }))
        .query(async ({ ctx, input }) => {
            const [row] = await ctx.db
                .select()
                .from(posts)
                .where(eq(posts.id, input.id))
                .limit(1);
            return row ?? null;
        }),

    create: protectedProcedure
        .input(
            z.object({
                title: z.string().min(1).max(200),
                content: z.string().min(1),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const [row] = await ctx.db.insert(posts).values(input).returning();
            return row;
        }),
});
