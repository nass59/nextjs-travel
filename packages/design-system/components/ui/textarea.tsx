import type * as React from "react";

import { cn } from "@repo/design-system/lib/utils";

// Textarea
type TextareaProps = React.ComponentProps<"textarea">;

const Textarea = ({ className, ref, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

// Exports
export { Textarea };
