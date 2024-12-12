import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Skeleton
type SkeletonProps = ComponentProps<"div">;

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
};

// Exports
export { Skeleton };
