/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

nextConfig.rewrites = async () => [
  {
    source: '/',
    destination: '/home',
  },  
];

module.exports = nextConfig
