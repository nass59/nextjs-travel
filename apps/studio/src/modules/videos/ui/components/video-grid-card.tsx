import Link from "next/link";

import type { VideoGetManyOutput } from "@/modules/videos/types";
import { VideoInfo } from "@/modules/videos/ui/components/video-info";
import { VideoThumbnail } from "@/modules/videos/ui/components/video-thumbnail";

type Props = {
  data: VideoGetManyOutput["items"][number];
  onRemove?: () => void;
};

export const VideoGridCard = ({ data, onRemove }: Props) => {
  return (
    <div className="group flex w-full flex-col gap-2">
      <Link href={`/videos/${data.id}`}>
        <VideoThumbnail
          imageUrl={data.thumbnailUrl}
          previewUrl={data.previewUrl}
          title={data.title}
          duration={data.duration}
        />
      </Link>
      <VideoInfo data={data} onRemove={onRemove} />
    </div>
  );
};
