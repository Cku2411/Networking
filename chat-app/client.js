const net = require("net");

const hostname = "127.0.0.1";
const port = 4080;

const client = net.createConnection(
  {
    host: hostname,
    port: port,
  },
  () => {
    console.log("Connect to the server");
  }
);

client.on("close", () => {
  console.log("Closed");
});

client.on("end", () => {
  console.log("ENDED");
});

// 2:53
