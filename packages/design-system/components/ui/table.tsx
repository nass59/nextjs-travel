import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Table
type TableProps = ComponentProps<"table">;

const Table = ({ className, ref, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
);

// TableHeader
type TableHeaderProps = ComponentProps<"thead">;

const TableHeader = ({ className, ref, ...props }: TableHeaderProps) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
);

// TableBody
type TableBodyProps = ComponentProps<"tbody">;

const TableBody = ({ className, ref, ...props }: TableBodyProps) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
);

// TableFooter
type TableFooterProps = ComponentProps<"tfoot">;

const TableFooter = ({ className, ref, ...props }: TableFooterProps) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
);

// TableRow
type TableRowProps = ComponentProps<"tr">;

const TableRow = ({ className, ref, ...props }: TableRowProps) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
);

// TableHead
type TableHeadProps = ComponentProps<"th">;

const TableHead = ({ className, ref, ...props }: TableHeadProps) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);

// TableCell
type TableCellProps = ComponentProps<"td">;

const TableCell = ({ className, ref, ...props }: TableCellProps) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);

// TableCaption
type TableCaptionProps = ComponentProps<"caption">;

const TableCaption = ({ className, ref, ...props }: TableCaptionProps) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-muted-foreground text-sm", className)}
    {...props}
  />
);

// Exports
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
