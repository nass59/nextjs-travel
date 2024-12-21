"use client";

import type { ComponentProps } from "react";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";

import { cn } from "@repo/design-system/lib/utils";

// Tabs
const Tabs = Root;

// TabsList
type TabsListProps = ComponentProps<typeof List>;

const TabsList = ({ className, ref, ...props }: TabsListProps) => (
  <List
    ref={ref}
    className={cn(
      "bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1",
      className
    )}
    {...props}
  />
);

// TabsTrigger
type TabsTriggerProps = ComponentProps<typeof Trigger>;

const TabsTrigger = ({ className, ref, ...props }: TabsTriggerProps) => (
  <Trigger
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",
      className
    )}
    {...props}
  />
);

// TabsContent
type TabsContentProps = ComponentProps<typeof Content>;

const TabsContent = ({ className, ref, ...props }: TabsContentProps) => (
  <Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
);

// Exports
export { Tabs, TabsList, TabsTrigger, TabsContent };
