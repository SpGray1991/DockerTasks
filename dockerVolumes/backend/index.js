import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import config from "./config/index.js";

const { PORT } = config;

const DB_URL = `mongodb+srv://Gray1991:z1x2c3v4@node.hs7xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello Node!");
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("server started on " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
