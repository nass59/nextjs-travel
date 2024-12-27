import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export const ProfilePicture = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-col items-center gap-2">
      <div className="relative flex w-full justify-center">
        <Image
          alt="Profile picture"
          height={80}
          width={80}
          src={user.imageUrl}
          className="size-20 rounded-full"
        />
      </div>
      {user.firstName && user.lastName ? (
        <h1 className="relative w-full text-center text-[1.0625rem] font-semibold">
          {user.firstName} {user.lastName}
        </h1>
      ) : (
        <div className="h-4" />
      )}
    </div>
  );
};
