const dgram = require("dgram");

const port = 4080;
const hostname = "localhost";
const sender = dgram.createSocket("udp4");

sender.send("this is the first Message", port, hostname, (err, bytes) => {
  if (err) {
    console.log(err);
  }

  console.log(bytes);
});
