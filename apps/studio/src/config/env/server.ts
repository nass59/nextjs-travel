import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    CLERK_SECRET_KEY: z.string(),
    CLERK_SIGNING_SECRET: z.string(),
    DATABASE_URL: z.string(),
    DATABASE_URL_UNPOOLED: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
