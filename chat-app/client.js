const net = require("net");
const readline = require("readline/promises");

const hostname = "127.0.0.1";
const port = 5000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let id;

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

  if (data.toString().substring(0, 2) === "id") {
    // When we are getting an ID from server
    id = data.toString().substring(3);
    console.log(`Your id is ${id}! \n`);
  } else {
    // WHen we are getting an message

    // log the message
    console.log(data.toString());
  }
  ask();
});

// 2:53
const ask = async () => {
  const message = await rl.question("Enter a message > ");
  const messageSent = `${id}-message&${message}`;
  // move cursor one line up
  await moveCursor(0, -1);
  // clear the chat line
  await clearLine(0);
  client.write(messageSent, (err) => {
    if (err) console.log(err);
  });
};
