"use client";

import { Root } from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@repo/design-system/lib/utils";

const labelVariants = cva(
  "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// Label
type LabelProps = ComponentProps<typeof Root> &
  VariantProps<typeof labelVariants>;

const Label = ({ className, ref, ...props }: LabelProps) => (
  <Root ref={ref} className={cn(labelVariants(), className)} {...props} />
);

// Exports
export { Label };
