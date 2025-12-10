/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/saidmustafasaid/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/saidmustafasaid' : '',
};

module.exports = nextConfig;
