/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      webpack: (config) => {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, './'),
        };

        return config;
      },
};

module.exports = nextConfig;
