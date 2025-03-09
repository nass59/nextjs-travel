import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    // Clerk
    CLERK_SECRET_KEY: z.string(),
    CLERK_SIGNING_SECRET: z.string(),
    // Database
    DATABASE_URL: z.string(),
    DATABASE_URL_UNPOOLED: z.string(),
    // Mux
    MUX_TOKEN_ID: z.string(),
    MUX_TOKEN_SECRET: z.string(),
    MUX_WEBHOOK_SECRET: z.string(),
    // Upstash
    UPSTASH_REDIS_REST_URL: z.string(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),
    UPLOADTHING_TOKEN: z.string(),
    UPSTASH_WORKFLOW_URL: z.string(),
    // Qstash
    QSTASH_TOKEN: z.string(),
    QSTASH_CURRENT_SIGNING_KEY: z.string(),
    QSTASH_NEXT_SIGNING_KEY: z.string(),
    // OpenAI
    OPENAI_API_KEY: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
