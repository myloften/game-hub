/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.output',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-avatar', '@radix-ui/react-label', '@radix-ui/react-slot', '@radix-ui/react-tabs'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 禁用 webpack 缓存
      config.cache = false;
      
      // 优化分包策略
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 5000000, // 降低到 5MB
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                if (!match) return 'lib';
                const packageName = match[1];
                return `lib.${packageName.replace('@', '')}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
        runtimeChunk: {
          name: 'runtime',
        },
        minimize: true,
        minimizer: [
          ...config.optimization.minimizer || [],
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
              },
              mangle: true,
              output: {
                comments: false,
              },
            },
          }),
        ],
      };

      // 禁用 source maps
      config.devtool = false;
      
      // 优化模块解析
      config.resolve = {
        ...config.resolve,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          ...config.resolve.alias,
          'react': 'react/dist/react.production.min.js',
          'react-dom': 'react-dom/dist/react-dom.production.min.js',
        },
      };

      // 禁用一些不必要的功能
      config.performance = {
        hints: false,
      };
      config.stats = {
        children: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig 