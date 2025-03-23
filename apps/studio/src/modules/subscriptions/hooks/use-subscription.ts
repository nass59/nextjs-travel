import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";

import { trpc } from "@/trpc/client";

type Props = {
  userId: string;
  isSubscribed: boolean;
  fromVideoId?: string;
};

export const useSubscription = ({
  userId,
  isSubscribed,
  fromVideoId,
}: Props) => {
  const clerk = useClerk();
  const utils = trpc.useUtils();

  const subscribe = trpc.subscriptions.create.useMutation({
    onSuccess: () => {
      toast.success("Subscribed successfully");

      if (fromVideoId) {
        utils.videos.getOne.invalidate({ id: fromVideoId });
      }
    },
    onError: (error) => {
      toast.error("Failed to subscribe");

      if (error.data?.code === "UNAUTHORIZED") {
        clerk.openSignIn();
      }
    },
  });

  const unsubscribe = trpc.subscriptions.remove.useMutation({
    onSuccess: () => {
      toast.success("Subscribed successfully");

      if (fromVideoId) {
        utils.videos.getOne.invalidate({ id: fromVideoId });
      }
    },
    onError: (error) => {
      toast.error("Failed to subscribe");

      if (error.data?.code === "UNAUTHORIZED") {
        clerk.openSignIn();
      }
    },
  });

  const isPending = subscribe.isPending || unsubscribe.isPending;

  const onClick = () => {
    if (isSubscribed) {
      unsubscribe.mutate({ userId });
      return;
    }

    subscribe.mutate({ userId });
  };

  return {
    isPending,
    onClick,
  };
};
