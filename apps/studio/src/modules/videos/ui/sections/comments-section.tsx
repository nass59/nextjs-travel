"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { CommentForm } from "@/modules/comments/ui/components/comment-form";
import { CommentItem } from "@/modules/comments/ui/components/comment-item";
import { trpc } from "@/trpc/client";

type Props = {
  videoId: string;
};

const CommentsSectionSuspense = ({ videoId }: Props) => {
  const [comments] = trpc.comments.getMany.useSuspenseQuery({ videoId });

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        <h1>0 comments</h1>
        <CommentForm videoId={videoId} />
        <div className="mt-2 flex flex-col gap-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const CommentsSection = ({ videoId }: Props) => {
  return (
    <ErrorBoundary fallback={<p>Error...</p>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CommentsSectionSuspense videoId={videoId} />
      </Suspense>
    </ErrorBoundary>
  );
};
