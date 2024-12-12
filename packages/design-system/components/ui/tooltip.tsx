"use client";

import {
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// TooltipProvider
const TooltipProvider = Provider;

// Tooltip
const Tooltip = Root;

// TooltipTrigger
const TooltipTrigger = Trigger;

// TooltipContent
type TooltipContentProps = ComponentProps<typeof Content>;

const TooltipContent = ({
  className,
  sideOffset = 4,
  ref,
  ...props
}: TooltipContentProps) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out",
        className
      )}
      {...props}
    />
  </Portal>
);

// Exports
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
