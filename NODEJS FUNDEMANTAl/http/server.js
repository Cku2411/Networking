const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const hostname = "localhost";

// -----------------------
const app = express();
const PORT = 5000;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/test")
//   .then((res) => {
//     console.log(`Mongodb connected!`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// app.use(
//   session({
//     secret: `Key that will sig cookies`,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(cookieParser());

app.get("/cookie/get", (req, res) => {
  const cookies = req.cookies;
  res.send(cookies);
});

app.get("/", (req, res) => {
  //   res.setHeader("set-cookie", "username=CKUUUUU");
  res.cookie("Username", "setmax", {
    // maxAge: 5 * 1000,
    expires: new Date(Date.now() + 5 * 1000),
  });

  // console.log(req.headers["user-agent"]);
  console.log(req.headers);
  console.log(req.navigator);
  res.send("Hello Session Tut");
});

app.listen(PORT, hostname, () => {
  console.log(`Server running on http://${hostname}:${PORT}`);
});
