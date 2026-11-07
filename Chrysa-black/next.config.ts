import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
    // Optimize packages: tree-shake framer-motion and gsap
    optimizePackageImports: ["framer-motion", "gsap", "@gsap/react", "lucide-react"],
  },

  turbopack: {
    root: path.resolve(process.cwd(), ".."),
    resolveAlias: {
      "@shared": "./shared",
    },
  },

  // Enable gzip/brotli compression
  compress: true,

  // Optimize images via Next.js built-in
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [441, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Add security + performance HTTP headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https:",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
      // Cache public images for 1 year
      {
        source: "/work/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/common/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Webpack config for production build (not used in dev/turbopack, but good for `next build`)
  webpack(config, { dev }) {
    if (!dev) {
      // Tree-shake lodash etc if ever imported
      config.resolve.alias = {
        ...config.resolve.alias,
        lodash: "lodash-es",
      };
    }
    return config;
  },
};

export default nextConfig;
