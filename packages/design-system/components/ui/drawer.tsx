"use client";

import type { ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@repo/design-system/lib/utils";

// Drawer
type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;

const Drawer = ({ shouldScaleBackground = true, ...props }: DrawerProps) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);

// DrawerTrigger
const DrawerTrigger = DrawerPrimitive.Trigger;

// DrawerPortal
const DrawerPortal = DrawerPrimitive.Portal;

// DrawerClose
const DrawerClose = DrawerPrimitive.Close;

// DrawerOverlay
type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;

const DrawerOverlay = ({ className, ref, ...props }: DrawerOverlayProps) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
);

// DrawerContent
type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>;

const DrawerContent = ({
  className,
  children,
  ref,
  ...props
}: DrawerContentProps) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
);

// DrawerHeader
type DrawerHeaderProps = ComponentProps<"div">;

const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);

// DrawerFooter
type DrawerFooterProps = ComponentProps<"div">;

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);

// DrawerTitle
type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

const DrawerTitle = ({ className, ref, ...props }: DrawerTitleProps) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "font-semibold text-lg leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

// DrawerDescription
type DrawerDescriptionProps = ComponentProps<
  typeof DrawerPrimitive.Description
>;

const DrawerDescription = ({
  className,
  ref,
  ...props
}: DrawerDescriptionProps) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

// Exports
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
