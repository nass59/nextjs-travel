import { currentUser } from "@clerk/nextjs/server";

import { formatDate } from "../utils/date";
import { RowMetadata } from "./RowMetadata";

export const ProfileMetadata = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="divide-y divide-[#EEEEF0] rounded-lg bg-[#FAFAFB] px-2.5">
      <RowMetadata desc="Email" value={user.emailAddresses[0].emailAddress} />
      <RowMetadata
        desc="Last signed in"
        value={
          user.lastSignInAt ? formatDate(new Date(user.lastSignInAt)) : "N/A"
        }
      />
      <RowMetadata
        desc="Joined on"
        value={formatDate(new Date(user.createdAt))}
      />
      <RowMetadata desc="User ID" value={user.id} />
    </div>
  );
};
