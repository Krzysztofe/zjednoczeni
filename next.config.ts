import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srv124418.seohost.com.pl",
      },
    ],
  },
};

export default nextConfig;
