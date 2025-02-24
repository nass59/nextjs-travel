import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    CLERK_SECRET_KEY: z.string(),
    CLERK_SIGNING_SECRET: z.string(),
    DATABASE_URL: z.string(),
    DATABASE_URL_UNPOOLED: z.string(),
    MUX_TOKEN_ID: z.string(),
    MUX_TOKEN_SECRET: z.string(),
    MUX_WEBHOOK_SECRET: z.string(),
    UPSTASH_REDIS_REST_URL: z.string(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
