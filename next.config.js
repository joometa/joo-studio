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
      "/good-day": { page: "/good-day" },
      "/popular-music-chart": { page: "/popular-music-chart" },
      "/memo": { page: "/memo" },
    };
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/crawler/song-chart/:path*",
  //       destination: `${
  //         process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"
  //       }/song-chart/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
