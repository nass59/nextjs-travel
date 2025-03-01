"use client";

import { Suspense } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoreVerticalIcon, TrashIcon } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { Button } from "@workspace/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/design-system/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@workspace/design-system/components/ui/form";
import { Input } from "@workspace/design-system/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/design-system/components/ui/select";
import { Textarea } from "@workspace/design-system/components/ui/textarea";

import { videoUpdateSchema } from "@/db/schema";
import { trpc } from "@/trpc/client";

type Props = {
  videoId: string;
};

const FormSectionSuspense = ({ videoId }: Props) => {
  const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId });
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const utils = trpc.useUtils();

  const update = trpc.videos.update.useMutation({
    onSuccess: () => {
      utils.studio.getMany.invalidate();
      utils.studio.getOne.invalidate({ id: videoId });
      toast.success("Video updated!");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const form = useForm<z.infer<typeof videoUpdateSchema>>({
    resolver: zodResolver(videoUpdateSchema),
    defaultValues: video,
  });

  const onSubmit = (data: z.infer<typeof videoUpdateSchema>) => {
    update.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Video details</h1>
            <p className="text-muted-foreground text-xs">
              Manage your video details
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Button type="submit" disabled={update.isPending}>
              Save
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <TrashIcon className="mr-2 size-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Add a title to your video" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value || ""}
                      rows={10}
                      className="resize-none pr-10"
                      placeholder="Add a description to your video"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Add Thumbnail field here */}
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

const FormSectionSkeleton = () => {
  return <div>Loading...</div>;
};

export const FormSection = ({ videoId }: Props) => {
  return (
    <Suspense fallback={<FormSectionSkeleton />}>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <FormSectionSuspense videoId={videoId} />
      </ErrorBoundary>
    </Suspense>
  );
};
