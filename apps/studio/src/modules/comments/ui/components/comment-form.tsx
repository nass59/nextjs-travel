import { useClerk, useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { Button } from "@workspace/design-system/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/design-system/components/ui/form";
import { Textarea } from "@workspace/design-system/components/ui/textarea";

import { UserAvatar } from "@/components/user-avatar";
import { commentInsertSchema } from "@/db/schema";
import { USER_THUMBNAIL_FALLBACK } from "@/modules/videos/constants";
import { trpc } from "@/trpc/client";

type Props = {
  videoId: string;
  onSuccess?: () => void;
};

export const CommentForm = ({ videoId, onSuccess = () => {} }: Props) => {
  const { user } = useUser();
  const clerk = useClerk();
  const utils = trpc.useUtils();

  const create = trpc.comments.create.useMutation({
    onSuccess: () => {
      utils.comments.getMany.invalidate({ videoId });
      form.reset();
      toast.success("Comment added");
      onSuccess();
    },
    onError: (error) => {
      toast.error("Something went wrong");

      if (error.data?.code === "UNAUTHORIZED") {
        clerk.openSignIn();
      }
    },
  });

  const form = useForm<z.infer<typeof commentInsertSchema>>({
    resolver: zodResolver(commentInsertSchema),
    defaultValues: {
      videoId,
      value: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof commentInsertSchema>) => {
    create.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        className="group flex gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <UserAvatar
          size="lg"
          imageUrl={user?.imageUrl || USER_THUMBNAIL_FALLBACK}
          name={user?.username || "User"}
        />
        <div className="flex-1">
          <FormField
            name="value"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Add a comment..."
                    className="h-15 min-h-0 resize-none overflow-hidden bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-2 flex justify-end gap-2">
            <Button type="submit" size="sm">
              Comment
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
