"use client";

import type { ComponentProps } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";

import { cn } from "@repo/design-system/lib/utils";

// Select
const Select = Root;

// SelectGroup
const SelectGroup = Group;

// SelectValue
const SelectValue = Value;

// SelectTrigger
type SelectTriggerProps = ComponentProps<typeof Trigger>;

const SelectTrigger = ({
  className,
  children,
  ref,
  ...props
}: SelectTriggerProps) => (
  <Trigger
    ref={ref}
    className={cn(
      "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <Icon asChild>
      <ChevronDownIcon className="h-4 w-4 opacity-50" />
    </Icon>
  </Trigger>
);

// SelectScrollUpButton
type SelectScrollUpButtonProps = ComponentProps<typeof ScrollUpButton>;

const SelectScrollUpButton = ({
  className,
  ref,
  ...props
}: SelectScrollUpButtonProps) => (
  <ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon className="h-4 w-4" />
  </ScrollUpButton>
);

// SelectScrollDownButton
type SelectScrollDownButtonProps = ComponentProps<typeof ScrollDownButton>;

const SelectScrollDownButton = ({
  className,
  ref,
  ...props
}: SelectScrollDownButtonProps) => (
  <ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </ScrollDownButton>
);

// SelectContent
type SelectContentProps = ComponentProps<typeof Content>;

const SelectContent = ({
  className,
  children,
  position = "popper",
  ref,
  ...props
}: SelectContentProps) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </Viewport>
      <SelectScrollDownButton />
    </Content>
  </Portal>
);

// SelectLabel
type SelectLabelProps = ComponentProps<typeof Label>;

const SelectLabel = ({ className, ref, ...props }: SelectLabelProps) => (
  <Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
);

// SelectItem
type SelectItemProps = ComponentProps<typeof Item>;

const SelectItem = ({
  className,
  children,
  ref,
  ...props
}: SelectItemProps) => (
  <Item
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
  </Item>
);

// SelectSeparator
type SelectSeparatorProps = ComponentProps<typeof Separator>;

const SelectSeparator = ({
  className,
  ref,
  ...props
}: SelectSeparatorProps) => (
  <Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
);

// Exports
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
