"use client";

import type { ComponentProps } from "react";
import {
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";

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
        "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 animate-in bg-primary text-primary-foreground data-[state=closed]:animate-out z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs",
        className
      )}
      {...props}
    />
  </Portal>
);

// Exports
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
