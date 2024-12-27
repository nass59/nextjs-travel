import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    /**
     * The authInterrupts configuration option allows you to use forbidden and unauthorized APIs
     * in your application. While these functions are experimental, you must enable the authInterrupts
     * option in your next.config.js file to use them.
     *
     * @doc https://nextjs.org/docs/app/api-reference/config/next-config-js/authInterrupts
     */
    authInterrupts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
