import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import {
  Button,
  type buttonVariants,
} from "@workspace/design-system/components/ui/button";
import { cn } from "@workspace/design-system/lib/utils";

type Props = ComponentProps<"button"> & {
  isSubscribed: boolean;
  size?: VariantProps<typeof buttonVariants>["size"];
};

export const SubscriptionButton = ({
  size,
  isSubscribed,
  className,
  ...props
}: Props) => {
  return (
    <Button
      size={size}
      variant={isSubscribed ? "secondary" : "default"}
      className={cn("rounded-full", className)}
      {...props}
    >
      {isSubscribed ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};
