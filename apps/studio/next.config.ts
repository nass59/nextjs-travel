import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@mux/mux-node"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dodb5uvg1j.ufs.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
