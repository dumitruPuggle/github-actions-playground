const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello world");
  res.send(200);
});

app.listen(3000);
