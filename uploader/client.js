const net = require("net");
const fs = require("fs/promises");
const path = require("path");

const clearLine = (dir) => {
  return new Promise((res, rej) => {
    process.stdout.clearLine(dir, () => {
      res();
    });
  });
};

const moveCursor = (dx, dy) => {
  return new Promise((res, rej) => {
    process.stdout.moveCursor(dx, dy, () => {
      res();
    });
  });
};

// ======================

const PORT = 5000;
const hostName = "localhost";
const client = net.createConnection(
  {
    host: hostName,
    port: PORT,
  },

  async () => {
    // understand process project.
    // take the third argument
    const filePath = process.argv[2];
    const fileName = path.basename(filePath);

    console.log(`file name is ${fileName} and filePath ${filePath}`);

    const fileHander = await fs.open(filePath, "r");
    const fileReadStream = fileHander.createReadStream();
    const fileSize = (await fileHander.stat()).size;

    // for showing upload progress
    let uploadedPercentage = 0;
    let bytesUploaded = 0;

    client.write(`fileName:  ${fileName}`);

    // Reading from source fiel
    fileReadStream.on("data", async (data) => {
      // while reading from source file, we write data to server can catch event
      if (!client.write(data)) {
        fileReadStream.pause();
      }
      // calculate bytes uploaded
      bytesUploaded += data.length;
      let newPercentage = Math.floor((bytesUploaded / fileSize) * 100);

      //We update percent every 5%
      if (newPercentage % 5 === 0 && newPercentage !== uploadedPercentage) {
        uploadedPercentage = newPercentage;

        // clear and move cursor to display log
        await moveCursor(0, -1);
        await clearLine();

        console.log(`Uploading...  ${uploadedPercentage}%`);
      }
    });

    client.on("drain", () => {
      fileReadStream.resume();
    });

    fileReadStream.on("end", () => {
      console.log(`The file was successfully uploaded!`);
      client.end();
    });
  }
);
