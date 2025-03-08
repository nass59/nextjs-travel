import { type User } from "@clerk/nextjs/server";

import {
  Avatar,
  AvatarFallback,
} from "@workspace/design-system/components/ui/avatar";

import { NextAvatar } from "@/components/next-avatar";

const DEFAULT_SIZE = 64;

type NavUserAvatarProps = {
  user: User;
  size?: number;
};

type AvatarDisplayProps = Required<NavUserAvatarProps>;

/**
 * Generates the fallback content for the avatar
 * @param name - User's full name
 * @returns The first letter of the user's name in uppercase or a default character
 */
const getAvatarFallback = (name?: string | null): string =>
  name?.charAt(0)?.toUpperCase() ?? "?";

/**
 * Renders the avatar content based on user data
 * @param props - AvatarDisplayProps containing user data and optional size
 */
const AvatarDisplay = ({ user, size }: AvatarDisplayProps) => (
  <Avatar>
    {user?.hasImage && (
      <NextAvatar
        src={user.imageUrl}
        height={size}
        width={size}
        alt={user?.fullName || "User avatar"}
      />
    )}
    <AvatarFallback>
      <span className="text-xs">{getAvatarFallback(user?.fullName)}</span>
    </AvatarFallback>
  </Avatar>
);

/**
 * NavUserAvatar Component
 *
 * A server component that displays a user's avatar in the navigation bar.
 * Fetches the current user data and renders either their profile image
 * or a fallback with their initials.
 *
 * @param user - The current user object
 * @param size - The size of the avatar (default: 64)
 * @returns A React server component rendering the user's avatar
 */
export const NavUserAvatar = async ({
  user,
  size = DEFAULT_SIZE,
}: NavUserAvatarProps) => {
  if (!user) {
    return (
      <Avatar>
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
    );
  }

  return <AvatarDisplay user={user} size={size} />;
};
