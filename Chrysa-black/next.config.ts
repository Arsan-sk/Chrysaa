import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  turbopack: {
    root: path.resolve(process.cwd(), ".."),
    resolveAlias: {
      "@shared": "./shared",
    },
  },
};

export default nextConfig;
