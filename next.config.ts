/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
      outputFileTracingIncludes: {
        '/api/**': ['components/**/*.tsx'],
      },
    },
  }

  module.exports = nextConfig
