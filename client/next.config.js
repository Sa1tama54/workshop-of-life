/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tehpanda.ru'],
  },
};

module.exports = nextConfig;
