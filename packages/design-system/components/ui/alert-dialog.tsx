"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-alert-dialog";

import { buttonVariants } from "@repo/design-system/components/ui/button";
import { cn } from "@repo/design-system/lib/utils";

// AlertDialog
const AlertDialog = Root;

// AlertDialogTrigger
const AlertDialogTrigger = Trigger;

// AlertDialogPortal
const AlertDialogPortal = Portal;

// AlertDialogOverlay
type AlertDialogOverlayProps = ComponentProps<typeof Overlay>;

const AlertDialogOverlay = ({
  className,
  ref,
  ...props
}: AlertDialogOverlayProps) => (
  <Overlay
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=open]:animate-in fixed inset-0 z-50 bg-black/80",
      className
    )}
    {...props}
    ref={ref}
  />
);

// AlertDialogContent
type AlertDialogContentProps = ComponentProps<typeof Content>;

const AlertDialogContent = ({
  className,
  ref,
  ...props
}: AlertDialogContentProps) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <Content
      ref={ref}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] bg-background data-[state=closed]:animate-out data-[state=open]:animate-in fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
);

// AlertDialogHeader
type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement>;

const AlertDialogHeader = ({ className, ...props }: AlertDialogHeaderProps) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

// AlertDialogFooter
type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>;

const AlertDialogFooter = ({ className, ...props }: AlertDialogFooterProps) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

// AlertDialogTitle
type AlertDialogTitleProps = ComponentProps<typeof Title>;

const AlertDialogTitle = ({
  className,
  ref,
  ...props
}: AlertDialogTitleProps) => (
  <Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
);

// AlertDialogDescription
type AlertDialogDescriptionProps = ComponentProps<typeof Description>;

const AlertDialogDescription = ({
  className,
  ref,
  ...props
}: AlertDialogDescriptionProps) => (
  <Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

// AlertDialogAction
type AlertDialogActionProps = ComponentProps<typeof Action>;

const AlertDialogAction = ({
  className,
  ref,
  ...props
}: AlertDialogActionProps) => (
  <Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
);

// AlertDialogCancel
type AlertDialogCancelProps = ComponentProps<typeof Cancel>;

const AlertDialogCancel = ({
  className,
  ref,
  ...props
}: AlertDialogCancelProps) => (
  <Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
);

// Exports
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
