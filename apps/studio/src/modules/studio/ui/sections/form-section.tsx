"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CopyCheckIcon,
  CopyIcon,
  Globe2Icon,
  ImagePlayIcon,
  Loader2Icon,
  LockIcon,
  MoreVerticalIcon,
  RotateCcwIcon,
  SparklesIcon,
  TrashIcon,
} from "lucide-react";
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
import { Skeleton } from "@workspace/design-system/components/ui/skeleton";
import { Textarea } from "@workspace/design-system/components/ui/textarea";

import { env } from "@/config/env/client";
import { videoUpdateSchema } from "@/db/schema";
import { snakeCaseToTitle } from "@/lib/utils";
import { ThumbnailGenerateModal } from "@/modules/studio/ui/components/thumbnail-generate-modal";
import { THUMBNAIL_FALLBACK } from "@/modules/videos/constants";
import { VideoPlayer } from "@/modules/videos/ui/components/video-player";
import { trpc } from "@/trpc/client";

import { ThumbnailUploadModal } from "../components/thumbnail-upload-modal";

type Props = {
  videoId: string;
};

const FormSectionSuspense = ({ videoId }: Props) => {
  const router = useRouter();
  const utils = trpc.useUtils();

  const [thumbnailModalOpen, setThumbnailModalOpen] = useState<boolean>(false);
  const [thumbnailGenerateModalOpen, setThumbnailGenerateModalOpen] =
    useState<boolean>(false);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId });
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const fullUrl = `${env.NEXT_PUBLIC_APP_URL}/videos/${videoId}`;

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

  const remove = trpc.videos.remove.useMutation({
    onSuccess: () => {
      utils.studio.getMany.invalidate();
      toast.success("Video removed!");
      router.push("/studio");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const restoreThumbnail = trpc.videos.restoreThumbnail.useMutation({
    onSuccess: () => {
      utils.studio.getMany.invalidate();
      utils.studio.getOne.invalidate({ id: videoId });
      toast.success("Video thumbnail restored!");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const generateDescription = trpc.videos.generateDescription.useMutation({
    onSuccess: () => {
      toast.success("Description generation started!", {
        description: "This may take a few minutes.",
      });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const generateTitle = trpc.videos.generateTitle.useMutation({
    onSuccess: () => {
      toast.success("Title generation started!", {
        description: "This may take a few minutes.",
      });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = (data: z.infer<typeof videoUpdateSchema>) => {
    update.mutate(data);
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const form = useForm<z.infer<typeof videoUpdateSchema>>({
    resolver: zodResolver(videoUpdateSchema),
    defaultValues: video,
  });

  return (
    <>
      <ThumbnailGenerateModal
        open={thumbnailGenerateModalOpen}
        onOpenChange={setThumbnailGenerateModalOpen}
        videoId={videoId}
      />
      <ThumbnailUploadModal
        open={thumbnailModalOpen}
        onOpenChange={setThumbnailModalOpen}
        videoId={videoId}
      />
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
              <Button
                type="submit"
                disabled={update.isPending || !form.formState.isDirty}
              >
                Save
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => remove.mutate({ id: videoId })}
                  >
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
                    <FormLabel>
                      <div className="flex items-center gap-x-2">
                        Title
                        <Button
                          size="icon"
                          variant="outline"
                          type="button"
                          className="size-6 rounded-full [&_svg]:size-3"
                          onClick={() => generateTitle.mutate({ id: videoId })}
                          disabled={
                            generateTitle.isPending || !video.muxTrackId
                          }
                        >
                          {generateTitle.isPending ? (
                            <Loader2Icon className="animate-spin" />
                          ) : (
                            <SparklesIcon className="size-6" />
                          )}
                        </Button>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Add a title to your video"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-x-2">
                        Description
                        <Button
                          size="icon"
                          variant="outline"
                          type="button"
                          className="size-6 rounded-full [&_svg]:size-3"
                          onClick={() =>
                            generateDescription.mutate({ id: videoId })
                          }
                          disabled={
                            generateDescription.isPending || !video.muxTrackId
                          }
                        >
                          {generateDescription.isPending ? (
                            <Loader2Icon className="animate-spin" />
                          ) : (
                            <SparklesIcon className="size-6" />
                          )}
                        </Button>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        value={field.value || ""}
                        rows={10}
                        className="min-h-36 resize-none pr-10"
                        placeholder="Add a description to your video"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="thumbnailUrl"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <div className="group relative aspect-video max-w-[300px] border border-dashed border-neutral-400 p-0.5">
                        <Image
                          fill
                          alt="Thumbnail"
                          src={video.thumbnailUrl || THUMBNAIL_FALLBACK}
                        />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              type="button"
                              className="absolute right-1 top-1 size-7 rounded-full bg-black/50 opacity-100 duration-300 hover:bg-black/50 group-hover:opacity-100 md:opacity-0"
                              size="icon"
                            >
                              <MoreVerticalIcon className="text-white" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" side="right">
                            <DropdownMenuItem
                              onClick={() => setThumbnailModalOpen(true)}
                            >
                              <ImagePlayIcon className="mr-1 size-4" />
                              Change
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                setThumbnailGenerateModalOpen(true)
                              }
                            >
                              <SparklesIcon className="mr-1 size-4" />
                              AI-generated
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                restoreThumbnail.mutate({ id: videoId })
                              }
                            >
                              <RotateCcwIcon className="mr-1 size-4" />
                              Restore
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
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
            <div className="flex flex-col gap-y-8 lg:col-span-2">
              <div className="flex h-fit flex-col gap-4 overflow-hidden rounded-xl bg-[#F9F9F9]">
                <div className="relative aspect-video overflow-hidden">
                  <VideoPlayer
                    playbackId={video.muxPlaybackId}
                    thumbnailUrl={video.thumbnailUrl}
                  />
                </div>
                <div className="flex flex-col gap-y-6 p-4">
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-muted-foreground text-xs">
                        Video Link
                      </p>
                      <div className="flex items-center gap-x-2">
                        <Link href={`/videos/${video.id}`}>
                          <p className="line-clamp-1 text-sm text-blue-500">
                            {fullUrl}
                          </p>
                        </Link>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="shrink-0"
                          onClick={onCopy}
                          disabled={isCopied}
                        >
                          {isCopied ? <CopyCheckIcon /> : <CopyIcon />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-muted-foreground text-xs">
                        Video status
                      </p>
                      <p className="text-sm">
                        {snakeCaseToTitle(video.muxStatus || "preparing")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-muted-foreground text-xs">
                        Subtitles status
                      </p>
                      <p className="text-sm">
                        {snakeCaseToTitle(
                          video.muxTrackStatus || "no_subtitles"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="visibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visibility</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="public">
                          <Globe2Icon className="mr-2 size-4" />
                          Public
                        </SelectItem>
                        <SelectItem value="private">
                          <LockIcon className="mr-2 size-4" />
                          Private
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

const FormSectionSkeleton = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-[220px] w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="aspect-video max-w-[300px]" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 lg:col-span-2">
          <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-[#F9F9F9]">
            <Skeleton className="aspect-video" />
            <div className="space-y-6 p-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-5 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FormSection = ({ videoId }: Props) => {
  return (
    <ErrorBoundary fallback={<div>Error...</div>}>
      <Suspense fallback={<FormSectionSkeleton />}>
        <FormSectionSuspense videoId={videoId} />
      </Suspense>
    </ErrorBoundary>
  );
};
