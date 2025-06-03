// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Hr-Dashboard",
  assetPrefix: "/Hr-Dashboard/",
};

module.exports = nextConfig;
