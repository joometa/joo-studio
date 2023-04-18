// 명령어 : node server/crawler/song-chart/ky/ky-crawler.js

const _ = require("lodash");
const axios = require("axios");
const cheerio = require("cheerio");

class KyCrawler {
  constructor() {
    this.client = axios.create({
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      },
    });
  }

  async crawlStat() {
    const url_1_to_50 = "https://kysing.kr/popular/?period=m&range=1";
    const url_51_to_100 = "https://kysing.kr/popular/?period=m&range=2";
    const resp_50 = await this.client.get(url_1_to_50);
    const resp_100 = await this.client.get(url_51_to_100);
    const $_50 = cheerio.load(resp_50.data);
    const $_100 = cheerio.load(resp_100.data);

    return {
      musicList: [...this._extractData($_50), ...this._extractData($_100)],
    };
  }

  _extractData($) {
    const result = [];
    const uls = $(".popular_chart_list");
    uls.each((idx, li) => {
      if (idx === 0) return;
      const data = {};

      const rank = $(li)
        .find(".popular_chart_link")
        .text()
        .toString()
        .split(" ")[0];
      const songNumber = $(li).find(".popular_chart_num").text();
      const songInfoArr = $(li).find(".tit").contents().toArray();
      const songTitle = $(songInfoArr[0]).text();
      const singer = $(songInfoArr[1]).text();

      data["rank"] = Number(rank);
      data["songNumber"] = Number(songNumber);
      data["songTitle"] = songTitle;
      data["singer"] = singer;
      result.push(data);
    });

    return result;
  }
}

module.exports = KyCrawler;
