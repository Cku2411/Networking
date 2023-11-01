const axios = require("axios");
const url = "http://localhost:5000/";
const urlTest = "https://archive.devcon.org/archive/";
const fs = require("fs");
const cherio = require("cheerio");

// ---------
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
};

// -------------------
console.log(`Get's started`);
(async () => {
  //   const tx = await fetch("http://localhost:5000/", {
  //     method: "GET",
  //   });

  const response = await axios.get(urlTest, {
    headers: headers,
  });

  const html = response.data;
  const $ = await cherio.load(html);

  const h1text = $("a").text();
  console.log(h1text);

  // fs.writeFileSync("test.html", html);
  // console.log(response.data);
  console.log(`request done`);
})();
