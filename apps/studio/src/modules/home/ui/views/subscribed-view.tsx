import { SubscribedVideosSection } from "@/modules/home/ui/sections/subscribed-videos-section.1";

export const SubscribedView = () => {
  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-6 px-4 pt-2.5">
      <div>
        <h1 className="text-2xl font-bold">Subscribed</h1>
        <p className="text-muted-foreground text-xs">
          Videos from your favorite creators
        </p>
      </div>
      <SubscribedVideosSection />
    </div>
  );
};
