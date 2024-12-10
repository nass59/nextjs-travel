"use client";

import { Indicator, Root } from "@radix-ui/react-progress";
import type * as React from "react";

import { cn } from "@repo/design-system/lib/utils";

// Progress
type ProgressProps = React.ComponentProps<typeof Root>;

const Progress = ({ className, value, ref, ...props }: ProgressProps) => (
  <Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
);

// Exports
export { Progress };
