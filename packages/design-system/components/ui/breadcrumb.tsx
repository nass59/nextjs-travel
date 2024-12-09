import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Breadcrumb
type BreadcrumbProps = ComponentProps<"nav"> & {
  separator?: ReactNode;
};

const Breadcrumb = ({ ref, ...props }: BreadcrumbProps) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} />
);

// BreadcrumbList
type BreadcrumbListProps = ComponentProps<"ol">;

const BreadcrumbList = ({ className, ref, ...props }: BreadcrumbListProps) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
      className
    )}
    {...props}
  />
);

// BreadcrumbItem
type BreadcrumbItemProps = ComponentProps<"li">;

const BreadcrumbItem = ({ className, ref, ...props }: BreadcrumbItemProps) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
);

// BreadcrumbLink
type BreadcrumbLinkProps = ComponentProps<"a"> & {
  asChild?: boolean;
};

const BreadcrumbLink = ({
  asChild,
  className,
  ref,
  ...props
}: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
};

// BreadcrumbPage
type BreadcrumbPageProps = ComponentProps<"span">;

const BreadcrumbPage = ({ className, ref, ...props }: BreadcrumbPageProps) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
);

// BreadcrumbSeparator
type BreadcrumbSeparatorProps = ComponentProps<"li">;

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
);

// BreadcrumbEllipsis
type BreadcrumbEllipsisProps = ComponentProps<"span">;

const BreadcrumbEllipsis = ({
  className,
  ...props
}: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

// Exports
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
