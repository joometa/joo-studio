/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

module.exports = {
  siteUrl,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`, // <==== Add here
    ],
  },
};
