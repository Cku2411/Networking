const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000; /// http://127.0.0.1:3000/ksldjflkjsd

// make sure you have nodeJS installed from https://nodejs.org/
//cd server
//npm install
//node main.js

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Hello World!");
});

app.get("/:id", (req, res) => {
  console.log(req.headers);
  res.send("Opp, you did it again !");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send("thanks for adding something");
});

app.put("/:id", (req, res) => {
  res.status(200).send("thanks for updating something");
});

app.patch("/:id", (req, res) => {
  res.status(200).send("thanks for updating something");
});

app.delete("/:id", (req, res) => {
  res.status(200).send("thanks for deleting something");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
