const http = require("http");

const port = 4080;
// const hostname = "192.168.1.18";
const hostname = "localhost";

const server = http.createServer((req, res) => {
  const data = { message: "Amaxing, I can't not see it" };

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");

  res.statusCode = 200;
  //   convert data to string and send then
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server is running on port http://${hostname}:${port}`);
});
