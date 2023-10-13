const net = require("net");
const readline = require("readline/promises");

const hostname = "127.0.0.1";
const port = 4080;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const client = net.createConnection(
  {
    host: hostname,
    port: port,
  },
  async () => {
    console.log("Connect to the server");

    ask();
  }
);

client.on("end", () => {
  console.log("ENDED");
});

client.on("data", async (data) => {
  // log empty line
  console.log();
  // move cursor up
  await moveCursor(0, -1);
  // clean the line
  await clearLine(0);
  // log the message
  console.log(data.toString());
  ask();
});

// 2:53
const ask = async () => {
  const message = await rl.question("Enter a message:");
  // move cursor one line up
  await moveCursor(0, -1);
  // clear the chat line
  await clearLine(0);
  client.write(message, (err) => {
    if (err) console.log(err);
  });
};
