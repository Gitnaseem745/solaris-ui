import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/api/**": ["components/**/*.tsx", "demos/**/*.tsx", "hooks/**/*.ts", "hooks/**/*.md"],
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
