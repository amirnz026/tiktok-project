/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["kryptic.arvanvod.com"],
  },
};

module.exports = nextConfig;
