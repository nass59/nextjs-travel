"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { cn } from "@workspace/design-system/lib/utils";

import { VideoTopRow } from "@/modules/videos/ui/components/video-top-row";
import { trpc } from "@/trpc/client";

import { VideoBanner } from "../components/video-banner";
import { VideoPlayer } from "../components/video-player";

type Props = {
  videoId: string;
};

const VideoSectionSuspense = ({ videoId }: Props) => {
  const [video] = trpc.videos.getOne.useSuspenseQuery({ id: videoId });

  return (
    <>
      <div
        className={cn(
          "relative aspect-video overflow-hidden rounded-xl bg-black",
          video.muxStatus !== "ready" && "rounded-b-none"
        )}
      >
        <VideoPlayer
          autoPlay={false}
          onPlay={() => {}}
          playbackId={video.muxPlaybackId}
          thumbnailUrl={video.thumbnailUrl}
        />
      </div>
      <VideoBanner status={video.muxStatus} />
      <VideoTopRow video={video} />
    </>
  );
};

export const VideoSection = ({ videoId }: Props) => {
  return (
    <ErrorBoundary fallback={<p>Error...</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <VideoSectionSuspense videoId={videoId} />
      </Suspense>
    </ErrorBoundary>
  );
};
