"use client";

import type { ComponentProps } from "react";
import { Indicator, Root } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@repo/design-system/lib/utils";

// Checkbox
type CheckboxProps = ComponentProps<typeof Root>;
const Checkbox = ({ className, ref, ...props }: CheckboxProps) => (
  <Root
    ref={ref}
    className={cn(
      "border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
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
