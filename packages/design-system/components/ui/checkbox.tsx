"use client";

import { Indicator, Root } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Checkbox
type CheckboxProps = ComponentProps<typeof Root>;
const Checkbox = ({ className, ref, ...props }: CheckboxProps) => (
  <Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <Indicator className={cn("flex items-center justify-center text-current")}>
      <CheckIcon className="h-4 w-4" />
    </Indicator>
  </Root>
);

// Exports
export { Checkbox };
