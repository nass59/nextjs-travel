"use client";

import type * as React from "react";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Menu,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-menubar";

import { cn } from "@repo/design-system/lib/utils";

// Menubar
const MenubarMenu: typeof Menu = Menu;

// MenubarGroup
const MenubarGroup = Group;

// MenubarPortal
const MenubarPortal = Portal;

// MenubarSub
const MenubarSub = Sub;

// MenubarRadioGroup
const MenubarRadioGroup = RadioGroup;

// Menubar
type MenubarProps = React.ComponentProps<typeof Root>;

const Menubar = ({ className, ref, ...props }: MenubarProps) => (
  <Root
    ref={ref}
    className={cn(
      "bg-background flex h-9 items-center space-x-1 rounded-md border p-1 shadow-sm",
      className
    )}
    {...props}
  />
);

// MenubarTrigger
type MenubarTriggerProps = React.ComponentProps<typeof Trigger>;

const MenubarTrigger = ({ className, ref, ...props }: MenubarTriggerProps) => (
  <Trigger
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none",
      className
    )}
    {...props}
  />
);

// MenubarSubTrigger
type MenubarSubTriggerProps = React.ComponentProps<typeof SubTrigger> & {
  inset?: boolean;
};

const MenubarSubTrigger = ({
  className,
  inset,
  children,
  ref,
  ...props
}: MenubarSubTriggerProps) => (
  <SubTrigger
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </SubTrigger>
);

// MenubarSubContent
type MenubarSubContentProps = React.ComponentProps<typeof SubContent>;

const MenubarSubContent = ({
  className,
  ref,
  ...props
}: MenubarSubContentProps) => (
  <SubContent
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      className
    )}
    {...props}
  />
);

// MenubarContent
type MenubarContentProps = React.ComponentProps<typeof Content>;

const MenubarContent = ({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ref,
  ...props
}: MenubarContentProps) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground data-[state=open]:animate-in z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md",
        className
      )}
      {...props}
    />
  </Portal>
);

// MenubarItem
type MenubarItemProps = React.ComponentProps<typeof Item> & {
  inset?: boolean;
};

const MenubarItem = ({ className, inset, ref, ...props }: MenubarItemProps) => (
  <Item
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

// MenubarCheckboxItem
type MenubarCheckboxItemProps = React.ComponentProps<typeof CheckboxItem>;

const MenubarCheckboxItem = ({
  className,
  children,
  checked,
  ref,
  ...props
}: MenubarCheckboxItemProps) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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

// MenubarRadioItem
type MenubarRadioItemProps = React.ComponentProps<typeof RadioItem>;

const MenubarRadioItem = ({
  className,
  children,
  ref,
  ...props
}: MenubarRadioItemProps) => (
  <RadioItem
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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

// MenubarLabel
type MenubarLabelProps = React.ComponentProps<typeof Label> & {
  inset?: boolean;
};

const MenubarLabel = ({
  className,
  inset,
  ref,
  ...props
}: MenubarLabelProps) => (
  <Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

// MenubarSeparator
type MenubarSeparatorProps = React.ComponentProps<typeof Separator>;

const MenubarSeparator = ({
  className,
  ref,
  ...props
}: MenubarSeparatorProps) => (
  <Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
);

// MenubarShortcut
type MenubarShortcutProps = React.ComponentProps<"span">;

const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => {
  return (
    <span
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
};

// Exports
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
