import { useMemo } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { Skeleton } from "@workspace/design-system/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/design-system/components/ui/tooltip";
import { cn } from "@workspace/design-system/lib/utils";

import { UserAvatar } from "@/components/user-avatar";
import { UserInfo } from "@/modules/users/ui/components/user-info";
import type { VideoGetManyOutput } from "@/modules/videos/types";
import { VideoMenu } from "@/modules/videos/ui/components/video-menu";
import { VideoThumbnail } from "@/modules/videos/ui/components/video-thumbnail";

const videoRowCardVariants = cva("group flex min-w-0", {
  variants: {
    size: {
      default: "gap-4",
      compact: "gap-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const thumbnailVariants = cva("relative flex-none", {
  variants: {
    size: {
      default: "w-[38%]",
      compact: "w-[168px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = VariantProps<typeof videoRowCardVariants> & {
  data: VideoGetManyOutput["items"][number];
  onRemove?: () => void;
};

export const VideoRowCardSkeleton = () => {
  return (
    <div>
      <Skeleton />
    </div>
  );
};

export const VideoRowCard = ({ data, size, onRemove }: Props) => {
  const compactViews = useMemo(() => {
    return Intl.NumberFormat("en", {
      notation: "compact",
    }).format(data.viewCount);
  }, [data.viewCount]);

  const compactLikes = useMemo(() => {
    return Intl.NumberFormat("en", {
      notation: "compact",
    }).format(data.likeCount);
  }, [data.likeCount]);

  return (
    <div className={videoRowCardVariants({ size })}>
      <Link href={`/videos/${data.id}`} className={thumbnailVariants({ size })}>
        <VideoThumbnail
          imageUrl={data.thumbnailUrl}
          previewUrl={data.previewUrl}
          title={data.title}
          duration={data.duration}
        />
      </Link>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex justify-between gap-x-2">
          <Link href={`/videos/${data.id}`} className="min-w-0 flex-1">
            <h3
              className={cn(
                "line-clamp-2 font-medium",
                size === "compact" ? "text-sm" : "text-base"
              )}
            >
              {data.title}
            </h3>
            {size === "default" && (
              <p className="text-muted-foreground mt-1 text-xs">
                {compactViews} views • {compactLikes} likes
              </p>
            )}
            {size === "default" && (
              <>
                <div className="my-3 flex items-center gap-2">
                  <UserAvatar
                    size="sm"
                    imageUrl={data.user.imageUrl}
                    name={data.user.name}
                  />
                  <UserInfo name={data.user.name} size="sm" />
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-muted-foreground line-clamp-2 w-fit text-xs">
                      {data.description || "No description"}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    align="center"
                    className="bg-black/70"
                  >
                    <p>From the video description</p>
                  </TooltipContent>
                </Tooltip>
              </>
            )}
            {size === "compact" && <UserInfo name={data.user.name} size="sm" />}
            {size === "compact" && (
              <p className="text-muted-foreground mt-1 text-xs">
                {compactViews} views • {compactLikes} likes
              </p>
            )}
          </Link>
          <div className="flex-none">
            <VideoMenu videoId={data.id} onRemove={onRemove} />
          </div>
        </div>
      </div>
    </div>
  );
};
