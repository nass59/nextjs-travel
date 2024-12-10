"use client";

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@repo/design-system/lib/utils";
import type { ComponentProps } from "react";

// Dialog
const Dialog = Root;

// DialogTrigger
const DialogTrigger = Trigger;

// DialogPortal
const DialogPortal = Portal;

// DialogClose
const DialogClose = Close;

// DialogOverlay
type DialogOverlayProps = ComponentProps<typeof Overlay>;

const DialogOverlay = ({ className, ref, ...props }: DialogOverlayProps) => (
  <Overlay
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
);

// DialogContent
type DialogContentProps = ComponentProps<typeof Content>;

const DialogContent = ({
  className,
  children,
  ref,
  ...props
}: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      ref={ref}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Close>
    </Content>
  </DialogPortal>
);

// DialogHeader
type DialogHeaderProps = ComponentProps<"div">;

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

// DialogFooter
type DialogFooterProps = ComponentProps<"div">;

const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

// DialogTitle
type DialogTitleProps = ComponentProps<typeof Title>;

const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
  <Title
    ref={ref}
    className={cn(
      "font-semibold text-lg leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

// DialogDescription
type DialogDescriptionProps = ComponentProps<typeof Description>;

const DialogDescription = ({
  className,
  ref,
  ...props
}: DialogDescriptionProps) => (
  <Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

// Exports
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
