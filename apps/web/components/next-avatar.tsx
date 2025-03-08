import { AvatarImage } from "@workspace/design-system/components/ui/avatar";

import { AvatarUrlParams } from "@/types/avatar";
import { getAvatarUrl } from "@/utils/avatar";

/**
 * AvatarProps extends AvatarUrlParams and includes additional display properties
 */
type NextAvatarProps = AvatarUrlParams & {
  alt?: string | null;
};

/**
 * Default values for avatar properties
 */
const DEFAULT_AVATAR_CONFIG = {
  quality: 90,
  alt: "User profile picture",
  height: 64,
  width: 64,
} as const;

/**
 * NextAvatar component for displaying user avatars with optimized image loading
 *
 * @example
 * ```tsx
 * <NextAvatar src="/path/to/image.jpg" height={64} width={64} />
 * ```
 */
export const NextAvatar = ({
  src,
  height = DEFAULT_AVATAR_CONFIG.height,
  width = DEFAULT_AVATAR_CONFIG.width,
  quality = DEFAULT_AVATAR_CONFIG.quality,
  alt = DEFAULT_AVATAR_CONFIG.alt,
}: NextAvatarProps) => {
  const avatarUrl = getAvatarUrl({
    src,
    height,
    width,
    quality,
  });

  return (
    <AvatarImage
      src={avatarUrl}
      alt={alt || DEFAULT_AVATAR_CONFIG.alt}
      className="h-full w-full object-cover"
    />
  );
};
