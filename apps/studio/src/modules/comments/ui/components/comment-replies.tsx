import { CornerDownRightIcon, Loader2Icon } from "lucide-react";

import { Button } from "@workspace/design-system/components/ui/button";

import { DEFAULT_LIMIT } from "@/constants";
import { CommentItem } from "@/modules/comments/ui/components/comment-item";
import { trpc } from "@/trpc/client";

type Props = {
  parentId: string;
  videoId: string;
};

export const CommentReplies = ({ parentId, videoId }: Props) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    trpc.comments.getMany.useInfiniteQuery(
      {
        videoId,
        parentId,
        limit: DEFAULT_LIMIT,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  return (
    <div className="pl-14">
      <div className="mt-2 flex flex-col gap-4">
        {isLoading && (
          <div className="flex items-center justify-center">
            <Loader2Icon className="text-muted-foreground size-6 animate-spin" />
          </div>
        )}
        {!isLoading &&
          data?.pages
            .flatMap((page) => page.items)
            .map((comment) => (
              <CommentItem key={comment.id} comment={comment} variant="reply" />
            ))}
      </div>
      {hasNextPage && (
        <Button
          variant="tertiary"
          size="sm"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          <CornerDownRightIcon />
          Show more replies
        </Button>
      )}
    </div>
  );
};
