import { cva, type VariantProps } from "class-variance-authority";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/design-system/components/ui/tooltip";
import { cn } from "@workspace/design-system/lib/utils";

const userInfoVariants = cva("flex items-center gap-1", {
  variants: {
    size: {
      default: "[&_p]:text-sm [&_svg]:size-4",
      lg: "[&_p]:text-base [&_svg]:size-5 [&_p]:font-medium [&_p]:text-black",
      sm: "[&_p]:text-xs [&_svg]:size-3.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = VariantProps<typeof userInfoVariants> & {
  name: string;
  className?: string;
};

export const UserInfo = ({ name, size, className }: Props) => {
  return (
    <div className={cn(userInfoVariants({ size, className }))}>
      <Tooltip>
        <TooltipTrigger asChild>
          <p className="line-clamp-1 text-gray-500 hover:text-gray-800">
            {name}
          </p>
        </TooltipTrigger>
        <TooltipContent align="center" className="bg-black/90 text-white">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
