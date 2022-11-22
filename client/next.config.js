/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tehpanda.ru', process.env.IMAGE_DOMAIN],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`, // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
