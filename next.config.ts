import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    CAT_API_KEY: process.env.CAT_API_KEY || "DEMO_KEY",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com', // cspell:disable-line
      },
    ],
  },
};

export default nextConfig;
