const net = require("net");

const port = 3099;
const hostname = "127.0.0.1";
const server = net.createServer((socket) => {
  // socket is actally a duplex stream
  socket.on("data", (data) => {
    // receive data send to server and log
    console.log(data);
  });
});

server.listen(port, hostname, () => {
  const address = server.address();
  console.log(`Open server on ${address} `);
});
