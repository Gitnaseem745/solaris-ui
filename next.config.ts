const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    webpack(config) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': path.resolve(__dirname),
      };
      return config;
    },
  };

  const path = require('path');
  module.exports = withMDX(nextConfig);
