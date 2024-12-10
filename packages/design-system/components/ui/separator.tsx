"use client";

import { Root } from "@radix-ui/react-separator";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Separator
type SeparatorProps = ComponentProps<typeof Root>;

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ref,
  ...props
}: SeparatorProps) => (
  <Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
);

// Exports
export { Separator };
