const dgram = require("dgram");

const port = 4080;
const hostname = "localhost";

// create the endpoint
const receiver = dgram.createSocket("udp4");
receiver.bind({
  port: port,
  address: hostname,
});

// listen to the event
receiver.on("message", (message, remoteInfo) => {
  console.log(`Server got: ${message} from ${remoteInfo}`);
  console.log(remoteInfo);
});

receiver.on("listening", () => {
  console.log(`Server is listerning:`, receiver.address());
});
