import { cva, type VariantProps } from "class-variance-authority";

import {
  Avatar,
  AvatarImage,
} from "@workspace/design-system/components/ui/avatar";
import { cn } from "@workspace/design-system/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "size-9",
      xs: "size-4",
      sm: "size-6",
      lg: "size-10",
      xl: "size-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = VariantProps<typeof avatarVariants> & {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
};

export const UserAvatar = ({
  imageUrl,
  name,
  size,
  className,
  onClick,
}: Props) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size, className }))}
      onClick={onClick}
    >
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  );
};
