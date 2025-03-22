/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cloudflare.steamstatic.com',
        pathname: '/steam/apps/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-avatar', '@radix-ui/react-label', '@radix-ui/react-slot', '@radix-ui/react-tabs'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname),
    }
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bcryptjs: require.resolve('bcryptjs'),
      }
    }
    
    return config
  }
}

module.exports = nextConfig 