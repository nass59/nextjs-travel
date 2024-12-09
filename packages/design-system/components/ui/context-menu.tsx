"use client";

import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-context-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { cn } from "@repo/design-system/lib/utils";
import type { ComponentProps, HTMLAttributes } from "react";

// ContextMenu
const ContextMenu = Root;

// ContextMenuTrigger
const ContextMenuTrigger = Trigger;

// ContextMenuGroup
const ContextMenuGroup = Group;

// ContextMenuPortal
const ContextMenuPortal = Portal;

// ContextMenuSub
const ContextMenuSub = Sub;

// ContextMenuRadioGroup
const ContextMenuRadioGroup = RadioGroup;

// ContextMenuSubTrigger
type ContextMenuSubTriggerProps = ComponentProps<typeof SubTrigger> & {
  inset?: boolean;
};

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ref,
  ...props
}: ContextMenuSubTriggerProps) => (
  <SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </SubTrigger>
);

// ContextMenuSubContent
type ContextMenuSubContentProps = ComponentProps<typeof SubContent>;

const ContextMenuSubContent = ({
  className,
  ref,
  ...props
}: ContextMenuSubContentProps) => (
  <SubContent
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
);

// ContextMenuContent
type ContextMenuContentProps = ComponentProps<typeof Content>;

const ContextMenuContent = ({
  className,
  ref,
  ...props
}: ContextMenuContentProps) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  </Portal>
);

// ContextMenuItem
type ContextMenuItemProps = ComponentProps<typeof Item> & {
  inset?: boolean;
};

const ContextMenuItem = ({
  className,
  inset,
  ref,
  ...props
}: ContextMenuItemProps) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

// ContextMenuCheckboxItem
type ContextMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>;

const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  ref,
  ...props
}: ContextMenuCheckboxItemProps) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
);

// ContextMenuRadioItem
type ContextMenuRadioItemProps = ComponentProps<typeof RadioItem>;

const ContextMenuRadioItem = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuRadioItemProps) => (
  <RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <DotFilledIcon className="h-4 w-4 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
);

// ContextMenuLabel
type ContextMenuLabelProps = ComponentProps<typeof Label> & {
  inset?: boolean;
};

const ContextMenuLabel = ({
  className,
  inset,
  ref,
  ...props
}: ContextMenuLabelProps) => (
  <Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 font-semibold text-foreground text-sm",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

// ContextMenuSeparator
type ContextMenuSeparatorProps = ComponentProps<typeof Separator>;

const ContextMenuSeparator = ({
  className,
  ref,
  ...props
}: ContextMenuSeparatorProps) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
);

// ContextMenuShortcut
type ContextMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

const ContextMenuShortcut = ({
  className,
  ...props
}: ContextMenuShortcutProps) => {
  return (
    <span
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
};

// Exports
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
