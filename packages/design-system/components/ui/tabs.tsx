"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Tabs
const Tabs = Root;

// TabsList
type TabsListProps = ComponentProps<typeof List>;

const TabsList = ({ className, ref, ...props }: TabsListProps) => (
  <List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
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
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 font-medium text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
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
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
);

// Exports
export { Tabs, TabsList, TabsTrigger, TabsContent };
