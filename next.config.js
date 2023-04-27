/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: { domains: ["www.google.com"] },
};

module.exports = nextConfig;
