import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  type ButtonProps,
  buttonVariants,
} from "@repo/design-system/components/ui/button";
import { cn } from "@repo/design-system/lib/utils";
import type { ComponentProps } from "react";

// Pagination
type PaginationProps = ComponentProps<"nav">;

const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

// PaginationContent
type PaginationContentProps = ComponentProps<"ul">;

const PaginationContent = ({
  className,
  ref,
  ...props
}: PaginationContentProps) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
);

// PaginationItem
type PaginationItemProps = ComponentProps<"li">;

const PaginationItem = ({ className, ref, ...props }: PaginationItemProps) => (
  <li ref={ref} className={cn("", className)} {...props} />
);

// PaginationLink
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);

// PaginationPrevious
type PaginationPreviousProps = ComponentProps<typeof PaginationLink>;

const PaginationPrevious = ({
  className,
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);

// PaginationNext
type PaginationNextProps = ComponentProps<typeof PaginationLink>;

const PaginationNext = ({ className, ...props }: PaginationNextProps) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
);

// PaginationEllipsis
type PaginationEllipsisProps = ComponentProps<"span">;

const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

// Exports
export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
