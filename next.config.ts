import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'static-00.iconduck.com' }, { hostname: 's3.amazonaws.com' }, { hostname: 'images.unsplash.com' }]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
