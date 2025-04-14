import { NextConfig } from "next";
import withMDX from "@next/mdx";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/api/**": [
      "components/**/*.tsx",
      "demos/**/*.tsx",
      "hooks/**/*.ts",
      "hooks/**/*.md",
      "hooks/**/*.mdx", // Ensure MDX files are included
    ],
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"], // Add support for MD and MDX files
  // Add experimental features to improve static generation
  experimental: {
    // Enable static generation for dynamic routes
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

// Wrap the Next.js config with MDX support
export default withMDX({
  extension: /\.mdx?$/, // Match .mdx and .md files
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(nextConfig);
