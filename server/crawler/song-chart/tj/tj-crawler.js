// 명령어 : node server/crawler/song-chart/tj/tj-crawler.js

const _ = require("lodash");
const axios = require("axios");
const cheerio = require("cheerio");

class TjCrawler {
  constructor() {
    this.client = axios.create({
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      },
    });
  }

  async crawlStat() {
    const url = "https://www.tjmedia.com/tjsong/song_monthPopular.asp";
    const resp = await this.client.get(url);
    const $ = cheerio.load(resp.data);

    return { musicList: this._extractData($) };
  }

  _extractData($) {
    const result = [];
    const trs = $(".left").parent();
    trs.each((idx, tr) => {
      if (idx === 0) return;
      const data = {};

      const tds = $(tr).children().contents().toArray();

      data["rank"] = Number($(tds[0]).text());
      data["songNumber"] = Number($(tds[1]).text());
      data["songTitle"] = $(tds[2]).text();
      data["singer"] = $(tds[3]).text();

      if (data.rank && data.songNumber && data.songTitle && data.singer) {
        result.push(data);
      }
    });

    return result;
  }
}

module.exports = TjCrawler;
