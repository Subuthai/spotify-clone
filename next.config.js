/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "storage.googleapis.com"],
  },
};

module.exports = nextConfig;
