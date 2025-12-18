/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      };
    }
    return config;
  },
  /* config options here */
};

export default nextConfig;
