"use client";

import { useContext, type ComponentProps } from "react";
import { MinusIcon } from "@radix-ui/react-icons";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "@repo/design-system/lib/utils";

// InputOTP
type InputOTPProps = ComponentProps<typeof OTPInput>;

const InputOTP = ({
  className,
  containerClassName,
  ref,
  ...props
}: InputOTPProps) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
);

// InputOTPGroup
type InputOTPGroupProps = ComponentProps<"div">;

const InputOTPGroup = ({ className, ref, ...props }: InputOTPGroupProps) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
);

// InputOTPSlot
type InputOTPSlotProps = ComponentProps<"div"> & {
  index: number;
};

const InputOTPSlot = ({
  index,
  className,
  ref,
  ...props
}: InputOTPSlotProps) => {
  const inputOtpContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOtpContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "ring-ring z-10 ring-1",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
};

// InputOTPSeparator
type InputOTPSeparatorProps = ComponentProps<"div">;

const InputOTPSeparator = ({ ref, ...props }: InputOTPSeparatorProps) => (
  <div ref={ref} role="presentation" {...props}>
    <MinusIcon />
  </div>
);

// Exports
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
