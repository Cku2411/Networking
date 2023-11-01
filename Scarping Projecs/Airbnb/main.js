const pupperteer = require("puppeteer");
const cheerio = require("cheerio");

const sample = {};

const url =
  "https://www.airbnb.com/s/Halong-Bay-Natural-Heritage-Site--Quang-Ninh--Vietnam/homes?tab_id=home_tab&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-12-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&refinement_paths%5B%5D=%2Fhomes&place_id=ChIJh-6MUZZXSjER23hUyLywxlU&query=Halong%20Bay%20Natural%20Heritage%20Site%2C%20Quang%20Ninh&date_picker_type=calendar&checkin=2023-11-04&checkout=2023-11-05&adults=2&search_type=unknown";

const scrapDescription = async (url, page) => {
  try {
    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    const selector =
      " div > div:nth-child(1) > div:nth-child(3) > div > div > div > div > div:nth-child(1) > div > div > div > div > div > div > div > div > div > div:nth-child(1) > div > span > div > span";

    const translateSelect = "[data-testid='translation-announce-modal']";
    // const overviewSelector =
    //   "#site-content > div > div:nth-child(1) > div:nth-child(3) > div > div > div > div:nth-child(1) > div > div > section > div > div > div > div > h2";

    const overviewSelector =
      "#site-content > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div > div > div > div > div > section > div:nth-child(1) > span > h1";
    try {
      await page.waitForSelector(translateSelect, {
        timeout: 3000,
      });

      await page.click("button");
    } catch (error) {}

    await page.waitForSelector(selector, {
      timeout: 10000,
    });

    const html = await page.content();
    const $ = cheerio.load(html);

    const priceString = $($(selector)).text();
    console.log(`priceString`, priceString);
    const priceIndex = priceString.indexOf("night");
    console.log("priceIndex", priceIndex);
    const price = priceString.slice(0, priceIndex - 1);

    const overview = $(overviewSelector).text();

    return { price, overview };
  } catch (er) {
    console.log(er);
  }
};

const scrapingURL = async (url, page) => {
  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  // return HTML of the side
  const html = await page.content();
  const $ = cheerio.load(html);
  const homes = $("[itemprop='url']");
  const homeLists = homes
    .map((i, e) => `https://` + $(e).attr("content"))
    .get();

  return homeLists;
};

const main = async () => {
  try {
    const browser = await pupperteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    const homeLists = await scrapingURL(url, page);
    console.log(`there are ${homeLists.length} home!`);

    // scrap descritption
    const descriptionPage = await browser.newPage();

    for (let index = 0; index < homeLists.length; index++) {
      const { price, overview } = await scrapDescription(
        homeLists[index],
        descriptionPage
      );

      console.log(`No ${index + 1}: ${overview}:`, price);
    }
  } catch (error) {
    console.log(error);
  }
};
main();
