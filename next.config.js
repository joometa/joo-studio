/** @type {import('next').NextConfig} */
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
console.log(GOOGLE_API_KEY);
const nextConfig = {
  basePath: "/joo-studio",
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: "/holiday",
        destination: `https://www.googleapis.com/calendar/v3/calendars/ko.south_korea%23holiday%40group.v.calendar.google.com/events?key=${GOOGLE_API_KEY}&orderBy=startTime&singleEvents=true&timeMin=1990-01-01T00:00:00Z&timeMax=2041-01-01T00:00:00Z`,
      },
    ];
  },
};

module.exports = nextConfig;
