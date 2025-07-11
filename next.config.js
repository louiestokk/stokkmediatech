/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // säkra server-only routes
  },
}

module.exports = nextConfig
