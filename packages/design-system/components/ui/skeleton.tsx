import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Skeleton
type SkeletonProps = ComponentProps<"div">;

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn("bg-primary/10 animate-pulse rounded-md", className)}
      {...props}
    />
  );
};

// Exports
export { Skeleton };
