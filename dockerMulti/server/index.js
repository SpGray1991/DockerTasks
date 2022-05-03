const express = require("express");
const redis = require("ioredis");

const app = express();
const client = new redis({
  host: "redis-server",
  port: 6379,
});
client.set("visits", 30);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visit is" + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(9000, () => {
  console.log(`Listening on 8081`);
});
