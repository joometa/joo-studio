import type { NextApiRequest, NextApiResponse } from "next";

async function get_holidays() {
  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const COUNTRY_ID = process.env.KOREA_ID;
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${COUNTRY_ID}/events?key=${GOOGLE_API_KEY}&orderBy=startTime&singleEvents=true&timeMin=1990-01-01T00:00:00Z&timeMax=2041-01-01T00:00:00Z`
    ).then((data) => data.json());

    return response;
  } catch (err) {
    console.error(`ERROR에요! :${err}`);
  }
}

interface Data {
  items?: any;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const holidays = await get_holidays();
    res.status(200).json({ items: holidays.items, message: "Success!" });
  } catch (error) {
    res.status(500).json({ message: "Failed" });
  }
}
