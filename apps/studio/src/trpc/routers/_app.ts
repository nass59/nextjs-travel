import { categoriesRouter } from "@/modules/categories/server/procedures";
import { commentReactionsRouter } from "@/modules/comment-reactions/procedures";
import { commentsRouter } from "@/modules/comments/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { subscriptionsRouter } from "@/modules/subscriptions/server/procedures";
import { suggestionsRouter } from "@/modules/suggestions/server/procedures";
import { videoReactionsRouter } from "@/modules/video-reactions/procedures";
import { videoViewsRouter } from "@/modules/video-views/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videosRouter,
  comments: commentsRouter,
  commentReactions: commentReactionsRouter,
  categories: categoriesRouter,
  subscriptions: subscriptionsRouter,
  suggestions: suggestionsRouter,
  videosViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
