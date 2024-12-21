import type { ComponentProps } from "react";
import { Fallback, Image, Root } from "@radix-ui/react-avatar";

import { cn } from "@repo/design-system/lib/utils";

// Avatar
type AvatarProps = ComponentProps<typeof Root>;

const Avatar = ({ className, ref, ...props }: AvatarProps) => (
  <Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
);

// AvatarImage
type AvatarImageProps = ComponentProps<typeof Image>;

const AvatarImage = ({ className, ref, ...props }: AvatarImageProps) => (
  <Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
);

// AvatarFallback
type AvatarFallbackProps = ComponentProps<typeof Fallback>;

const AvatarFallback = ({ className, ref, ...props }: AvatarFallbackProps) => (
  <Fallback
    ref={ref}
    className={cn(
      "bg-muted flex h-full w-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
);

// Exports
export { Avatar, AvatarImage, AvatarFallback };
