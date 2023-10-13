const net = require("net");

const server = net.createServer();

const clients = [];

const port = 5000;
const hostname = "127.0.0.1";

server.on("connection", (client) => {
  // eveyr connection we have client object
  //   client is a duplex stream so it can write and read
  console.log("A new client connection to the server");
  // Getting an ID and sent it back to client.
  const clientId = clients.length + 1;
  client.write(`id-${clientId}`);
  // notify all user about new user
  clients.map((cl) => {
    cl.client.write(`User ${clientId} joined!`);
  });
  clients.push({ id: clientId.toString(), client });

  // -- listen to event
  client.on("data", (data) => {
    // everytime we receive data, we write all data to client
    const dataToString = data.toString();
    const id = dataToString.substring(0, dataToString.indexOf("-"));
    const message = dataToString.substring(dataToString.indexOf("&") + 1);
    clients.map((cl, i) => {
      cl.client.write(`User ${id}: ${message}`);
    });
  });

  client.on("error", (err) => {
    if (err.code === "ECONNRESET") {
      clients.map((cl) => {
        cl.client.write(`User ${clientId} left!`);
      });
    } else {
      console.log(err);
    }
  });
});

// Lisiten
server.listen(port, hostname, () => {
  const address = server.address();
  console.log(`open server on ${JSON.stringify(address)}`);
});
