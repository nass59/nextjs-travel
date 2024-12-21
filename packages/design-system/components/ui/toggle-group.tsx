"use client";

import { createContext, useContext, type ComponentProps } from "react";
import { Item, Root } from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";

import { toggleVariants } from "@repo/design-system/components/ui/toggle";
import { cn } from "@repo/design-system/lib/utils";

// Context
const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

// ToggleGroup
type ToggleGroupProps = ComponentProps<typeof Root> &
  VariantProps<typeof toggleVariants>;

const ToggleGroup = ({
  className,
  variant,
  size,
  children,
  ref,
  ...props
}: ToggleGroupProps) => (
  <Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext value={{ variant, size }}>
      {children}
    </ToggleGroupContext>
  </Root>
);

// ToggleGroupItem
type ToggleGroupItemProps = ComponentProps<typeof Item> &
  VariantProps<typeof toggleVariants>;

const ToggleGroupItem = ({
  className,
  children,
  variant,
  size,
  ref,
  ...props
}: ToggleGroupItemProps) => {
  const context = useContext(ToggleGroupContext);

  return (
    <Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Item>
  );
};

// Exports
export { ToggleGroup, ToggleGroupItem };
