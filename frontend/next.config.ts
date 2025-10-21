import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix workspace root detection
  outputFileTracingRoot: __dirname,
  // Temporarily disable turbopack due to React Server Components bundler issues
  // turbopack: {
  //   root: __dirname,
  // },
};

export default nextConfig;
