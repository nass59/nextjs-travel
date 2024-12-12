"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps, HTMLAttributes } from "react";

import {
  Dialog,
  DialogContent,
} from "@repo/design-system/components/ui/dialog";
import { cn } from "@repo/design-system/lib/utils";

// Command
type CommandProps = ComponentProps<typeof CommandPrimitive>;

const Command = ({ className, ref, ...props }: CommandProps) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
);

// CommandDialog
const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

// CommandInput
type CommandInputProps = ComponentProps<typeof CommandPrimitive.Input>;

const CommandInput = ({ className, ref, ...props }: CommandInputProps) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
);

// CommandList
type CommandListProps = ComponentProps<typeof CommandPrimitive.List>;

const CommandList = ({ className, ref, ...props }: CommandListProps) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
);

// CommandEmpty
type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty>;

const CommandEmpty = ({ ref, ...props }: CommandEmptyProps) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
);

// CommandGroup
type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group>;

const CommandGroup = ({ className, ref, ...props }: CommandGroupProps) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
      className
    )}
    {...props}
  />
);

// CommandSeparator
type CommandSeparatorProps = ComponentProps<typeof CommandPrimitive.Separator>;

const CommandSeparator = ({
  className,
  ref,
  ...props
}: CommandSeparatorProps) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
);

// CommandItem
type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>;

const CommandItem = ({ className, ref, ...props }: CommandItemProps) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
);

// CommandShortcut
type CommandShortcutProps = HTMLAttributes<HTMLSpanElement>;

const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => {
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
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
