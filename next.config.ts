import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile network IP testing
  allowedDevOrigins: ['172.20.10.2']
};

export default nextConfig;
