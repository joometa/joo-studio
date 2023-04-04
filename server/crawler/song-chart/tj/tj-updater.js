const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { format, utcToZonedTime } = require("date-fns-tz");
const TjCrawler = require("./tj-crawler");

async function crawlAndUpdateTj(outputPath) {
  let prevData = [];
  const tjJsonPath = path.join(outputPath, "tj-chart.json");

  try {
    prevData = JSON.parse(fs.readFileSync(tjJsonPath, "utf-8"));
  } catch (e) {
    console.error("previous TJ chart json file not found");
  }

  const tjCrawler = new TjCrawler();

  const now = new Date();
  const timeZone = "Asia/Seoul";
  const crawledDate = format(utcToZonedTime(now, timeZone), "yyyy-MM-dd");
  const { musicList } = await tjCrawler.crawlStat();

  const newData = {
    crawledDate,
    musicList,
  };

  // 변경된 값 없을 경우
  if (_.isEqual(newData, prevData)) {
    console.log("TJ chart has not been changed");
    return;
  }

  fs.writeFileSync(tjJsonPath, JSON.stringify(newData));

  console.log("TJ chart updated successfully");
}

module.exports = { crawlAndUpdateTj };
