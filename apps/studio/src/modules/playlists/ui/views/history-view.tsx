import { HistoryVideosSection } from "@/modules/playlists/ui/sections/history-videos-section";

export const HistoryView = () => {
  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-6 px-4 pt-2.5">
      <div>
        <h1 className="text-2xl font-bold">History</h1>
        <p className="text-muted-foreground text-xs">
          Videos you have watched recently
        </p>
      </div>
      <HistoryVideosSection />
    </div>
  );
};
