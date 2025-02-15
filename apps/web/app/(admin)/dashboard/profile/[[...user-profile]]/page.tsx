import { Separator } from "@workspace/design-system/components/ui/separator";

import { ProfileMetadata } from "@/features/profile/components/ProfileMetadata";
import { ProfilePicture } from "@/features/profile/components/ProfilePicture";
import { SessionMetadata } from "@/features/profile/components/SessionMetadata";

export default function ProfilePage() {
  return (
    <div className="container mx-auto space-y-4 p-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          My profile
        </h1>
        <Separator />
      </div>
      <div className="flex flex-col gap-4">
        <div className="background relative rounded-lg border border-[#EDEDED] bg-[#F1F1F2] p-16">
          <div className="max-w-[30rem] rounded-xl bg-white p-8 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5">
            <ProfilePicture />
            <ProfileMetadata />
            <SessionMetadata />
          </div>
        </div>
      </div>
    </div>
  );
}
