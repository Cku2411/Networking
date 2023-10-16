const net = require("net");
const fs = require("fs/promises");

const server = net.createServer(() => {});
const PORT = 5000;
const hostName = "localhost";

server.on("connection", (client) => {
  console.log(`New client connect to server!`);
  let fileHander, fileWriteStream;
  // Handle error
  client.on("error", (err) => {
    if (err.code === "ECONNRESET") {
      console.log(`Connection is lost`);
      if (fileHander) {
        fileHander.close();
      }
    } else {
      console.log(err);
      if (fileHander) {
        fileHander.close();
      }
    }
  });

  // monitor data
  client.on("data", async (data) => {
    // check if file open or not
    if (!fileHander) {
      // if file isn't exit then
      client.pause(); // pause receiving data from the client

      const indexOfDivider = data.indexOf(":");
      const fileName = data.subarray(indexOfDivider + 2).toString("utf-8");
      console.log(`FileName is ${fileName}`);

      // open file
      fileHander = await fs.open(`./storage/${fileName}`, "w");
      fileWriteStream = fileHander.createWriteStream();
      // write to destination file subtract headers fileName
      fileWriteStream.write(
        data.subarray(indexOfDivider + 2 + fileName.length)
      );
      // continue receiveing data from client
      client.resume();

      fileWriteStream.on("drain", () => {
        // contiunue reading
        client.resume();
      });
    } else {
      // writing file until it fails, stop write file
      if (!fileWriteStream.write(data)) {
        client.pause();
      }
    }

    // listen to the event
    client.on("end", () => {
      // console.log(`Recieved sucessed, client disconnected!`);
      fileHander.close();
    });
  });
});

// lisen to server
server.listen(PORT, hostName, () => {
  console.log(`Uploader server open on http://${hostName}:${PORT}`);
});
