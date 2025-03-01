import { TRPCError } from "@trpc/server";
import { and, desc, eq, lt, or } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const studioRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const { id: userId } = ctx.user;

      const [video] = await db
        .select()
        .from(videos)
        .where(and(eq(videos.id, id), eq(videos.userId, userId)))
        .limit(1);

      if (!video) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Video not found",
        });
      }

      return video;
    }),
  getMany: protectedProcedure
    .input(
      z.object({
        cursor: z
          .object({
            id: z.string().uuid(),
            updatedAt: z.date(),
          })
          .nullish(),
        limit: z.number().min(1).max(100),
      })
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit } = input;
      const { id: userId } = ctx.user;

      /**
       * This query fetches videos for a user.
       * It uses the cursor to paginate the results.
       * If the updatedAt is the same, the id is used to determine the order.
       * The query fetches one more item than the limit to check if there are more pages.
       */
      const data = await db
        .select()
        .from(videos)
        .where(
          and(
            eq(videos.userId, userId),
            cursor
              ? or(
                  lt(videos.updatedAt, cursor.updatedAt),
                  and(
                    eq(videos.updatedAt, cursor.updatedAt),
                    lt(videos.id, cursor.id)
                  )
                )
              : undefined
          )
        )
        // Order by updatedAt DESC
        .orderBy(desc(videos.updatedAt))
        // Add one to the limit to check if there are more pages
        .limit(limit + 1);

      // Check if there are more pages
      const hasMore = data.length > limit;
      // Remove the last item if there are more pages
      const items = hasMore ? data.slice(0, -1) : data;
      // Get the last item
      const lastItem = items[items.length - 1];

      const nextCursor = hasMore
        ? { id: lastItem.id, updatedAt: lastItem.updatedAt }
        : null;

      return { items, nextCursor };
    }),
});
