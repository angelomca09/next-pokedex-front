/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1"],
  },
  env: {
    baseUrl: "http://127.0.0.1:3333",
  },
};

module.exports = nextConfig;
