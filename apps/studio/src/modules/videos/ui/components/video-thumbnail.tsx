import Image from "next/image";

import { formatDuration } from "@/lib/utils";

type Props = {
  title: string;
  duration: number;
  imageUrl?: string | null;
  previewUrl?: string | null;
};

export const VideoThumbnail = ({
  title,
  duration,
  imageUrl,
  previewUrl,
}: Props) => {
  return (
    <div className="group relative">
      {/* Thumbnail Wrapper */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={imageUrl || "/placeholder.jpg"}
          alt={title}
          fill
          className="size-full object-cover group-hover:opacity-0"
        />
        <Image
          src={previewUrl || "/placeholder.jpg"}
          alt={title}
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Video duration box */}
      <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1 py-0.5 text-xs font-medium text-white">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
