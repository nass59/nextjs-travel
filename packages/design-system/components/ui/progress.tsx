"use client";

import type * as React from "react";
import { Indicator, Root } from "@radix-ui/react-progress";

import { cn } from "@repo/design-system/lib/utils";

// Progress
type ProgressProps = React.ComponentProps<typeof Root>;

const Progress = ({ className, value, ref, ...props }: ProgressProps) => (
  <Root
    ref={ref}
    className={cn(
      "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    <Indicator
      className="bg-primary h-full w-full flex-1 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
);

// Exports
export { Progress };
