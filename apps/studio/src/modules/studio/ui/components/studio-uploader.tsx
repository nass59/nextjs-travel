import MuxUploader, {
  MuxUploaderDrop,
  MuxUploaderFileSelect,
  MuxUploaderProgress,
  MuxUploaderStatus,
} from "@mux/mux-uploader-react";
import { UploadIcon } from "lucide-react";

import { Button } from "@workspace/design-system/components/ui/button";

type Props = {
  endpoint?: string | null;
  onSuccess: () => void;
};

const UPLOADER_ID = "video-uploader";

export const StudioUploader = ({ endpoint, onSuccess }: Props) => {
  return (
    <div>
      <MuxUploader
        id={UPLOADER_ID}
        className="group/uploader hidden"
        endpoint={endpoint}
        onSuccess={onSuccess}
      />
      <MuxUploaderDrop muxUploader={UPLOADER_ID} className="group/drop">
        <div slot="heading" className="flex flex-col items-center gap-6">
          <div className="bg-muted flex size-32 items-center justify-center gap-2 rounded-full">
            <UploadIcon className="text-muted-foreground group/drop-[&[active]]:animate-bounce size-10 transition-all duration-300" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm">Drag and drop a video file to upload</p>
            <p className="text-muted-foreground text-xs">
              Your video will be private until you publish it
            </p>
          </div>
          <MuxUploaderFileSelect muxUploader={UPLOADER_ID}>
            <Button type="button" className="rounded-full">
              Select file
            </Button>
          </MuxUploaderFileSelect>
        </div>
        <span slot="separator" className="hidden"></span>
        <MuxUploaderStatus muxUploader={UPLOADER_ID} className="text-sm" />
        <MuxUploaderProgress
          muxUploader={UPLOADER_ID}
          className="text-sm"
          type="percentage"
        />
        <MuxUploaderProgress muxUploader={UPLOADER_ID} type="bar" />
      </MuxUploaderDrop>
    </div>
  );
};
