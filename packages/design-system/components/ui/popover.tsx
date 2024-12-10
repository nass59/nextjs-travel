"use client";

import {
  Anchor,
  Content,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-popover";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Popover
const Popover = Root;

// PopoverTrigger
const PopoverTrigger = Trigger;

// PopoverAnchor
const PopoverAnchor = Anchor;

// PopoverContent
type PopoverContentProps = ComponentProps<typeof Content>;

const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ref,
  ...props
}: PopoverContentProps) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  </Portal>
);

// Exports
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
