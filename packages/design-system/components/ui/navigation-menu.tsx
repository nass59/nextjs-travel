import type { ComponentProps } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Trigger,
  Viewport,
} from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@repo/design-system/lib/utils";

// NavigationMenu
type NavigationMenuProps = ComponentProps<typeof Root>;

const NavigationMenu = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuProps) => (
  <Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </Root>
);

// NavigationMenuList
type NavigationMenuListProps = ComponentProps<typeof List>;

const NavigationMenuList = ({
  className,
  ref,
  ...props
}: NavigationMenuListProps) => (
  <List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
);

// NavigationMenuItem
const NavigationMenuItem = Item;

// NavigationMenuTrigger
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

type NavigationMenuTriggerProps = ComponentProps<typeof Trigger>;

const NavigationMenuTrigger = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuTriggerProps) => (
  <Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </Trigger>
);

// NavigationMenuContent
type NavigationMenuContentProps = ComponentProps<typeof Content>;

const NavigationMenuContent = ({
  className,
  ref,
  ...props
}: NavigationMenuContentProps) => (
  <Content
    ref={ref}
    className={cn(
      "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out left-0 top-0 w-full md:absolute md:w-auto",
      className
    )}
    {...props}
  />
);

// NavigationMenuLink
const NavigationMenuLink = Link;

// NavigationMenuViewport
type NavigationMenuViewportProps = ComponentProps<typeof Viewport>;

const NavigationMenuViewport = ({
  className,
  ref,
  ...props
}: NavigationMenuViewportProps) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <Viewport
      className={cn(
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 origin-top-center bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
);

// NavigationMenuIndicator
type NavigationMenuIndicatorProps = ComponentProps<typeof Indicator>;

const NavigationMenuIndicator = ({
  className,
  ref,
  ...props
}: NavigationMenuIndicatorProps) => (
  <Indicator
    ref={ref}
    className={cn(
      "data-[state=hidden]:fade-out data-[state=visible]:fade-in data-[state=hidden]:animate-out data-[state=visible]:animate-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
      className
    )}
    {...props}
  >
    <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
  </Indicator>
);

// Exports
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
