"use client";

import type { ComponentProps } from "react";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@repo/design-system/lib/utils";

// Accordion
const Accordion = Root;

// AccordionItem
type AccordionItemProps = ComponentProps<typeof Item>;

const AccordionItem = ({ className, ref, ...props }: AccordionItemProps) => (
  <Item ref={ref} className={cn("border-b", className)} {...props} />
);

// AccordionTrigger
type AccordionTriggerProps = ComponentProps<typeof Trigger>;

const AccordionTrigger = ({
  className,
  children,
  ref,
  ...props
}: AccordionTriggerProps) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
);

// AccordionContent
type AccordionContentProps = ComponentProps<typeof Content>;

const AccordionContent = ({
  className,
  children,
  ref,
  ...props
}: AccordionContentProps) => (
  <Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Content>
);

// Exports
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
