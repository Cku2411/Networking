const net = require("net");

const server = net.createServer();
const clients = [];

const port = 4080;
const hostname = "127.0.0.1";

server.on("connection", (client) => {
  // eveyr connection we have client object
  //   client is a duplex stream so it can write and read
  console.log("A new client connection to the server");

  client.on("data", (data) => {
    // everytime we receive data, we write all data to client
    const dataToString = data.toString();
    clients.map((cl) => {
      cl.write(`${cl}: ${dataToString}`);
    });
  });

  clients.push(client);
});

// Lisiten
server.listen(port, hostname, () => {
  const address = server.address();
  console.log(`open server on ${JSON.stringify(address)}`);
});
