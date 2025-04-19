import { AlertTriangleIcon } from "lucide-react";

import type { VideoGetOneOutput } from "../../types";

type Props = {
  status: VideoGetOneOutput["muxStatus"];
};

export const VideoBanner = ({ status }: Props) => {
  if (status === "ready") {
    return null;
  }

  return (
    <div className="flex items-center gap-2 rounded-b-xl bg-yellow-500 px-4 py-3">
      <AlertTriangleIcon className="size-4 shrink-0 text-black" />
      <p className="line-clamp-1 text-xs font-medium text-black md:text-sm">
        This video is currently processing. Please check back later.
      </p>
    </div>
  );
};
