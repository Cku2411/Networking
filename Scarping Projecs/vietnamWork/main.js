const url = "https://devdocs.io/puppeteer/index#class-browsercontext";
const urlTest =
  "https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending";
const testDialog =
  "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related";
const fs = require("fs");
const cherio = require("cheerio");
const puppeteer = require("puppeteer");
const path = require("path");

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

  // Event handle
  page.on("load", () => {
    console.log(`Page load successfully!`);
  });

  page.on("dialog", (dialog) => {
    // finding the request that page made
    console.log(`A diaglo was made`, dialog.message());
  });

  page.on("console", (msg) => {
    for (let i = 0; i < msg.args().length; ++i)
      console.log(`${i}: ${msg.args()[i]}`);
  });

  page.on("frameattached", () => {
    console.log(`There is a frame`);
  });

  // page.on("response", (res) => {
  //   console.log(`an response has been received`, res.headers());
  // });

  page.on("request", (req) => {
    console.log(`an request has been received`, req.headers());
  });
  // -----------

  await page.goto(urlTest, {
    waitUntil: "networkidle0",
  });

  // Do something
  await page.screenshot({
    path: "test.png",
  });

  console.log(`Done`);
})();
