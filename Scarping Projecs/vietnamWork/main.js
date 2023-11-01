const url = "https://devdocs.io/puppeteer/index#class-browsercontext";
const urlTest =
  "https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending";
const testDialog =
  "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related";

const vnwUrl = "https://www.vietnamworks.com/viec-lam?q=construction&l=24";
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

  // page.on("console", (msg) => {
  //   for (let i = 0; i < msg.args().length; ++i)
  //     console.log(`${i}:${msg.text} ${msg.args()[i]}`);
  // });

  // page.on("frameattached", () => {
  //   console.log(`There is a frame`);
  // });

  // page.on("response", (res) => {
  //   console.log(`an response has been received`, res.headers());
  // });

  // page.on("request", (req) => {
  //   console.log(`an request has been received`, req.headers());
  // });
  // -----------

  await page.goto(vnwUrl, {
    timeout: 600000,
    waitUntil: "networkidle2",
  });

  // Do something

  // find all
  // await page.$$eval(".search_list", (els) => {
  //   console.log(`okie let's see...`);
  //   els.forEach((e, i) => {
  //     console.log(`NO ${i + 1}: `, e.querySelector("a").textContent);
  //   });
  // });

  // const pageData = await page.evaluate(() => {
  //   window.scrollTo(0, window.document.body.scrollHeight);
  //   return document.documentElement.innerHTML;
  // });

  console.log(`Start scroll`);
  // await page.evaluate(async () => {
  //   let scrollPosition = 0;
  //   let documentHeight = document.body.scrollHeight;

  //   // continue to the end of coucmetn
  //   while (documentHeight > scrollPosition) {
  //     window.scrollBy(0, documentHeight);
  //     // wait for timeOut
  //     await new Promise((resolve) => {
  //       setTimeout(resolve, 1000);
  //     });
  //     scrollPosition = documentHeight;
  //     documentHeight = document.body.scrollHeight;
  //   }

  //   // return
  //   // return document.documentElement.innerHTML;
  // });

  let result;
  while (!result) {
    try {
      result = await page.waitForSelector(".footer", {
        timeout: 10,
      });
    } catch (error) {}

    await page.keyboard.press("ArrowDown");
  }

  // await Promise.all([
  //   page.keyboard.down("ArrowDown"),
  //   page.waitForSelector(".footer"),
  //   // page.keyboard.up("ArrowDown"),
  // ]);

  console.log(`get page content`);

  const pageData = await page.content();
  const $ = cherio.load(pageData);
  const lists = $(".search_list");

  lists.each((i, e) => {
    console.log(`NO ${i + 1}:`, $(e).find("a").text());
  });

  console.log(`Done`);
})();
