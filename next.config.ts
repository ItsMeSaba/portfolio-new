import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
  // openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = withBundleAnalyzer({
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "static-00.iconduck.com" },
      { hostname: "s3.amazonaws.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "media.licdn.com" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  polyfill: false,
  legacyBrowsers: false,
  browsersListForSwc: true,
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
});

export default nextConfig;
