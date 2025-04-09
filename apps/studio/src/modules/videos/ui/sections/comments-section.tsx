"use client";

import { Suspense } from "react";
import { Loader2Icon } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { CommentForm } from "@/modules/comments/ui/components/comment-form";
import { CommentItem } from "@/modules/comments/ui/components/comment-item";
import { trpc } from "@/trpc/client";

type Props = {
  videoId: string;
};

const CommentsSectionSuspense = ({ videoId }: Props) => {
  const [comments, query] = trpc.comments.getMany.useSuspenseInfiniteQuery(
    {
      videoId,
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold">
          {comments.pages[0].totalCount} comments
        </h1>
        <CommentForm videoId={videoId} />
        <div className="mt-2 flex flex-col gap-4">
          {comments.pages
            .flatMap((page) => page.items)
            .map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          <InfiniteScroll
            isManual
            hasNextPage={query.hasNextPage}
            isFetchingNextPage={query.isFetchingNextPage}
            fetchNextPage={query.fetchNextPage}
          />
        </div>
      </div>
    </div>
  );
};

const CommentsSectionSkeleton = () => {
  return (
    <div className="mt-6 flex items-center justify-center">
      <Loader2Icon className="text-muted-foreground size-7 animate-spin" />
    </div>
  );
};

export const CommentsSection = ({ videoId }: Props) => {
  return (
    <ErrorBoundary fallback={<p>Error...</p>}>
      <Suspense fallback={<CommentsSectionSkeleton />}>
        <CommentsSectionSuspense videoId={videoId} />
      </Suspense>
    </ErrorBoundary>
  );
};
