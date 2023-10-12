const net = require("net");

const server = net.createServer();

const port = 4080;
const hostname = "127.0.0.1";

server.on("connection", (socket) => {
  //   socket.write();
  console.log("A new connection to the server");
});

// Lisiten
server.listen(port, hostname, () => {
  const address = server.address();
  console.log(`open server on ${JSON.stringify(address)}`);
});
