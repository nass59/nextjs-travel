"use client";

import type { ComponentProps } from "react";
import {
  Corner,
  Root,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  Viewport,
} from "@radix-ui/react-scroll-area";

import { cn } from "@repo/design-system/lib/utils";

// ScrollArea
type ScrollAreaProps = ComponentProps<typeof Root>;

const ScrollArea = ({
  className,
  children,
  ref,
  ...props
}: ScrollAreaProps) => (
  <Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <Viewport className="h-full w-full rounded-[inherit]">{children}</Viewport>
    <ScrollBar />
    <Corner />
  </Root>
);

// ScrollBar
type ScrollBarProps = ComponentProps<typeof ScrollAreaScrollbar>;

const ScrollBar = ({
  className,
  orientation = "vertical",
  ref,
  ...props
}: ScrollBarProps) => (
  <ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
  </ScrollAreaScrollbar>
);

// Exports
export { ScrollArea, ScrollBar };
