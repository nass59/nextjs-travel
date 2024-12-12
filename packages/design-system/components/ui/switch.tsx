"use client";

import { Root, Thumb } from "@radix-ui/react-switch";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Switch
type SwitchProps = ComponentProps<typeof Root>;

const Switch = ({ className, ref, ...props }: SwitchProps) => (
  <Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </Root>
);

// Exports
export { Switch };