"use client";

import type { ComponentProps } from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Indicator, Item, Root } from "@radix-ui/react-radio-group";

import { cn } from "@repo/design-system/lib/utils";

// RadioGroup
type RadioGroupProps = ComponentProps<typeof Root>;

const RadioGroup = ({ className, ref, ...props }: RadioGroupProps) => {
  return <Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
};

// RadioGroupItem
type RadioGroupItemProps = ComponentProps<typeof Item>;

const RadioGroupItem = ({ className, ref, ...props }: RadioGroupItemProps) => {
  return (
    <Item
      ref={ref}
      className={cn(
        "border-primary text-primary focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border shadow focus:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <DotFilledIcon className="fill-primary h-3.5 w-3.5" />
      </Indicator>
    </Item>
  );
};

// Exports
export { RadioGroup, RadioGroupItem };
