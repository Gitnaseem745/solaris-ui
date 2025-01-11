const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  };

  module.exports = withMDX(nextConfig);
