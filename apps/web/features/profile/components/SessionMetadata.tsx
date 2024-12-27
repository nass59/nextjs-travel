"use client";

import { useSession } from "@clerk/nextjs";

import { formatDateWithNumbers } from "../utils/date";
import { RowMetadata } from "./RowMetadata";

export const SessionMetadata = () => {
  const { session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <>
      <h2 className="mb-4 mt-6 text-[0.9375rem] font-semibold">
        Session details
      </h2>
      <div className="divide-y divide-[#EEEEF0] rounded-lg bg-[#FAFAFB] px-2.5">
        <RowMetadata desc="Session ID" value={session.id} />
        <RowMetadata desc="Status" value={session.status} />
        <RowMetadata
          desc="Last active"
          value={formatDateWithNumbers(session.lastActiveAt)}
        />
        <RowMetadata
          desc="Session expiration"
          value={formatDateWithNumbers(session.expireAt)}
        />
      </div>
    </>
  );
};
