import { CommentsSection } from "../sections/comments-section";
import { SuggestionsSection } from "../sections/suggestions-section";
import { VideoSection } from "../sections/video-section";

type Props = {
  videoId: string;
};

export const VideoView = ({ videoId }: Props) => {
  return (
    <div className="mx-auto mb-10 flex max-w-[1700px] flex-col px-4 pt-2.5">
      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="min-w-0 flex-1">
          <VideoSection videoId={videoId} />
          <div className="mt-4 block xl:hidden">
            <SuggestionsSection />
          </div>
          <CommentsSection />
        </div>
        <div className="shrink-1 hidden w-full xl:block xl:w-[380px] 2xl:w-[460px]">
          <SuggestionsSection />
        </div>
      </div>
    </div>
  );
};
