import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videoReactionsRouter } from "@/modules/video-reactions/procedures";
import { videoViewsRouter } from "@/modules/video-views/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  studio: studioRouter,
  videos: videosRouter,
  categories: categoriesRouter,
  videosViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
