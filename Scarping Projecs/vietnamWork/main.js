const url = "https://devdocs.io/puppeteer/index#class-browsercontext";
const urlTest = "https://www.vietnamworks.com/viec-lam?q=construction&l=24";
const fs = require("fs");
const cherio = require("cheerio");
const puppeteer = require("puppeteer");

// ---------
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
};

const result = {};
// -------------------
console.log(`Get's started`);
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  browser.on("targetcreated", async () => {
    console.log(`page change to`, await browser.target().url());
  });

  await page.goto(url);

  // const result = await page.$$(".search_list");
  console.log(`Oki, do something!`);

  await page.goto(urlTest);
})();
