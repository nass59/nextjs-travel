import { Client } from "@upstash/workflow";

import { env } from "@/config/env/server";

export const workflow = new Client({ token: env.QSTASH_TOKEN });
