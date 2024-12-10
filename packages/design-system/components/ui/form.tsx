"use client";

import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps, createContext, useContext, useId } from "react";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Label } from "@repo/design-system/components/ui/label";
import { cn } from "@repo/design-system/lib/utils";

// Form
const Form = FormProvider;

// FormFieldContext
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

// FormField
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext>
  );
};

// Hooks
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// FormItemContext
type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

// FormItem
type FormItemProps = ComponentProps<"div">;

const FormItem = ({ className, ref, ...props }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext>
  );
};

// FormLabel
type FormLabelProps = ComponentProps<typeof LabelPrimitive.Root>;

const FormLabel = ({ className, ref, ...props }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

// FormControl
type FormControlProps = ComponentProps<typeof Slot>;

const FormControl = ({ ref, ...props }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

// FormDescription
type FormDescriptionProps = ComponentProps<"p">;

const FormDescription = ({
  className,
  ref,
  ...props
}: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
};

// FormMessage
type FormMessageProps = ComponentProps<"p">;

const FormMessage = ({
  className,
  children,
  ref,
  ...props
}: FormMessageProps) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("font-medium text-[0.8rem] text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
};

// Exports
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
