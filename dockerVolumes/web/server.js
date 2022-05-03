const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(": Number of visits is: ");
});

app.listen(5000, function () {
  console.log("Web application is listening on port 5000");
});
