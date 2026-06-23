import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingRoot: import.meta.dirname,
  },
};

export default nextConfig;
