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
} from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { cn } from "@repo/design-system/lib/utils";
import type { ComponentProps } from "react";

// DropdownMenu
const DropdownMenu = Root;

// DropdownMenuTrigger
const DropdownMenuTrigger = Trigger;

// DropdownMenuGroup
const DropdownMenuGroup = Group;

// DropdownMenuPortal
const DropdownMenuPortal = Portal;

// DropdownMenuSub
const DropdownMenuSub = Sub;

// DropdownMenuRadioGroup
const DropdownMenuRadioGroup = RadioGroup;

// DropdownMenuSubTrigger
type DropdownMenuSubTriggerProps = ComponentProps<typeof SubTrigger> & {
  inset?: boolean;
};

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ref,
  ...props
}: DropdownMenuSubTriggerProps) => (
  <SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto" />
  </SubTrigger>
);

// DropdownMenuSubContent
type DropdownMenuSubContentProps = ComponentProps<typeof SubContent>;

const DropdownMenuSubContent = ({
  className,
  ref,
  ...props
}: DropdownMenuSubContentProps) => (
  <SubContent
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
);

// DropdownMenuContent
type DropdownMenuContentProps = ComponentProps<typeof Content>;

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ref,
  ...props
}: DropdownMenuContentProps) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  </Portal>
);

// DropdownMenuItem
type DropdownMenuItemProps = ComponentProps<typeof Item> & {
  inset?: boolean;
};

const DropdownMenuItem = ({
  className,
  inset,
  ref,
  ...props
}: DropdownMenuItemProps) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

// DropdownMenuCheckboxItem
type DropdownMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>;

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ref,
  ...props
}: DropdownMenuCheckboxItemProps) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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

// DropdownMenuRadioItem
type DropdownMenuRadioItemProps = ComponentProps<typeof RadioItem>;

const DropdownMenuRadioItem = ({
  className,
  children,
  ref,
  ...props
}: DropdownMenuRadioItemProps) => (
  <RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <DotFilledIcon className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
);

// DropdownMenuLabel
type DropdownMenuLabelProps = ComponentProps<typeof Label> & {
  inset?: boolean;
};

const DropdownMenuLabel = ({
  className,
  inset,
  ref,
  ...props
}: DropdownMenuLabelProps) => (
  <Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

// DropdownMenuSeparator
type DropdownMenuSeparatorProps = ComponentProps<typeof Separator>;

const DropdownMenuSeparator = ({
  className,
  ref,
  ...props
}: DropdownMenuSeparatorProps) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
);

// DropdownMenuShortcut
type DropdownMenuShortcutProps = ComponentProps<"span">;

const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

// Exports
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
