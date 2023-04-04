const path = require("path");
const fs = require("fs");
const { crawlAndUpdateTj } = require("./tj/tj-updater");
const { crawlAndUpdateKy } = require("./ky/ky-updater");

export async function crawlerTrigger() {
  const outputPath = path.join(process.cwd(), "src/data/song-chart");
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  try {
    console.log("TJ 미디어 : 크롤링 데이터 업데이트 시작합니다.");
    await crawlAndUpdateTj(outputPath);

    console.log("KY 미디어 : 크롤링 데이터 업데이트 시작합니다.");
    await crawlAndUpdateKy(outputPath);
  } catch (e) {
    console.error("크롤링데이터 업데이트에 실패했습니다. \nFailed :", e);
  }
  return;
}
