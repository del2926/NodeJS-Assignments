const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("Hello World!");
//   next();
// });

app.use("/users", (req, res, next) => {
  console.log("Hello Earth!");
  res.send("<h1>List of Users</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Hello World!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
