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
    /**
     * Next.js 15 introduced support for the React Compiler.
     * The compiler improves performance by automatically optimizing component rendering.
     * This reduces the amount of manual memoization developers have to do through APIs
     * such as useMemo and useCallback.
     *
     * @doc https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler
     */
    reactCompiler: true,
    /**
     * Experimental support for using Lightning CSS, a fast CSS bundler and minifier, written in Rust.
     *
     * @doc https://nextjs.org/docs/app/api-reference/config/next-config-js/useLightningcss
     */
    useLightningcss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
