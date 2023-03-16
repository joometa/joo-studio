/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  assetPrefix: !debug ? "" : "",
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/calendar": { page: "/calendar" },
      "/calculator/days": { page: "/calculator/days" },
      "/calculator/age": { page: "/calculator/age" },
      "/goodday": { page: "/goodday" },
    };
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
