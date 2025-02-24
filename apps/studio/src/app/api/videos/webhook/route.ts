import { headers } from "next/headers";
import type {
  VideoAssetCreatedWebhookEvent,
  VideoAssetErroredWebhookEvent,
  VideoAssetReadyWebhookEvent,
  VideoAssetTrackReadyWebhookEvent,
} from "@mux/mux-node/resources/webhooks.mjs";
import { eq } from "drizzle-orm";

import { env } from "@/config/env/server";
import { db } from "@/db";
import { videos } from "@/db/schema";
import { mux } from "@/lib/mux";

type WebhookEvent =
  | VideoAssetCreatedWebhookEvent
  | VideoAssetReadyWebhookEvent
  | VideoAssetErroredWebhookEvent
  | VideoAssetTrackReadyWebhookEvent;

export const POST = async (request: Request) => {
  const headersPayload = await headers();
  const muxSignature = headersPayload.get("mux-signature");

  if (!muxSignature) {
    return new Response("Missing Mux signature", { status: 401 });
  }

  const payload = await request.json();
  const body = JSON.stringify(payload);

  mux.webhooks.verifySignature(
    body,
    { "mux-signature": muxSignature },
    env.MUX_WEBHOOK_SECRET
  );

  switch (payload.type as WebhookEvent["type"]) {
    case "video.asset.created": {
      const data = payload.data as VideoAssetCreatedWebhookEvent["data"];

      if (!data.upload_id) {
        return new Response("No upload id", { status: 400 });
      }

      await db
        .update(videos)
        .set({
          muxAssetId: data.id,
          muxStatus: data.status,
        })
        .where(eq(videos.muxUploadId, data.upload_id));

      break;
    }
  }

  return new Response("Webhook received", { status: 200 });
};
