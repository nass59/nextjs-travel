import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@mux/mux-node"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
