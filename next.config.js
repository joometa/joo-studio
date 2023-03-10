/** @type {import('next').NextConfig} */
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const debug = process.env.NODE_ENV !== "production";

console.log(GOOGLE_API_KEY);

const nextConfig = {
  assetPrefix: !debug ? "" : "",
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
