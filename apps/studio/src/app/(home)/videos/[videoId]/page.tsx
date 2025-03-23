import { VideoView } from "@/modules/videos/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";

type PageProps = {
  params: Promise<{ videoId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { videoId } = await params;

  void trpc.videos.getOne.prefetch({ id: videoId });
  void trpc.comments.getMany.prefetch({ videoId });

  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
}
