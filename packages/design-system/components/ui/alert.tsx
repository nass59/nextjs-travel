import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Alert
type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertVariants>;

const Alert = ({ className, variant, ref, ...props }: AlertProps) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);

// AlertTitle
type AlertTitleProps = ComponentProps<"h5">;

const AlertTitle = ({ className, ref, ...props }: AlertTitleProps) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
);

// AlertDescription
type AlertDescriptionProps = ComponentProps<"div">;

const AlertDescription = ({ className, ref, ...props }: AlertDescriptionProps) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
);

// Exports
export { Alert, AlertTitle, AlertDescription };
