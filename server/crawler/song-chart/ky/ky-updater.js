const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { format, utcToZonedTime } = require("date-fns-tz");
const KyCrawler = require("./ky-crawler");

async function crawlAndUpdateKy(outputPath) {
  let prevData;
  const kyJsonPath = path.join(outputPath, "ky-chart.json");

  try {
    prevData = JSON.parse(fs.readFileSync(kyJsonPath, "utf-8"));
  } catch (e) {
    console.error("previous KY chart json file not found");
  }

  const kyCrawler = new KyCrawler();

  const now = new Date();
  const timeZone = "Asia/Seoul";
  const crawledDate = format(utcToZonedTime(now, timeZone), "yyyy-MM-dd");
  const { musicList } = await kyCrawler.crawlStat();

  const newData = {
    crawledDate,
    musicList,
  };

  //TODO : remove
  console.log("똑같아?", _.isEqual(newData, prevData));
  console.log("newData", newData.musicList.length);
  console.log("musicList", musicList.length);

  // 변경된 값 없을 경우
  if (_.isEqual(newData, prevData)) {
    console.log("KY chart has not been changed");
    return;
  }

  fs.writeFileSync(kyJsonPath, JSON.stringify(newData));

  console.log("KY Chart updated successfully");
}

module.exports = { crawlAndUpdateKy };
