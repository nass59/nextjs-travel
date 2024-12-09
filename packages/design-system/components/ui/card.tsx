import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

// Card
type CardProps = ComponentProps<"div">;

const Card = ({ className, ref, ...props }: CardProps) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props}
  />
);

// CardHeader
type CardHeaderProps = ComponentProps<"div">;

const CardHeader = ({ className, ref, ...props }: CardHeaderProps) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

// CardTitle
type CardTitleProps = ComponentProps<"div">;

const CardTitle = ({ className, ref, ...props }: CardTitleProps) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
);

// CardDescription
type CardDescriptionProps = ComponentProps<"div">;

const CardDescription = ({ className, ref, ...props }: CardDescriptionProps) => (
  <div ref={ref} className={cn("text-muted-foreground text-sm", className)} {...props} />
);

// CardContent
type CardContentProps = ComponentProps<"div">;

const CardContent = ({ className, ref, ...props }: CardContentProps) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);

// CardFooter
type CardFooterProps = ComponentProps<"div">;

const CardFooter = ({ className, ref, ...props }: CardFooterProps) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

// Exports
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
