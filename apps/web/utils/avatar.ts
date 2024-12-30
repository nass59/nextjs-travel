import { AvatarUrlParams } from "@/types/avatar";

/**
 * Default image quality setting for avatar optimization
 */
export const DEFAULT_QUALITY = 100;

type ImageDimensions = {
  height: number;
  width: number;
};

type ImageQuality = {
  quality?: number;
};

type OptimizationParams = ImageDimensions & ImageQuality;

/**
 * Constructs optimized image URL parameters
 */
const buildImageParams = ({
  height,
  width,
  quality = DEFAULT_QUALITY,
}: OptimizationParams): URLSearchParams => {
  const params = new URLSearchParams();

  params.set("height", String(height));
  params.set("width", String(width));
  params.set("quality", String(quality));

  return params;
};

/**
 * Generates an optimized avatar URL with specified dimensions and quality
 * @see {@link https://clerk.com/docs/guides/image-optimization/imageurl-image-optimization Clerk Image Optimization}
 */
export const getAvatarUrl = ({
  src,
  height,
  width,
  quality,
}: AvatarUrlParams): string => {
  const params = buildImageParams({ height, width, quality });

  return `${src}?${params.toString()}`;
};
