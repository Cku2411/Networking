const { parse } = require("csv-parse");
const fs = require("fs");

const result = [];
const fileReadStream = fs.createReadStream("./data.csv");

fileReadStream
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    result.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  });

fileReadStream.on("end", () => {
  console.log("DONE!");
  console.log(result);
});
