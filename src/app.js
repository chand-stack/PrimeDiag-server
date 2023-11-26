const express = require("express");
const cors = require("cors");
const app = express();
const serviceRouter = require("./app/modules/service/service.route");
const bannerRouter = require("./app/modules/banner/banner.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server cholche ok");
});

app.use("/service", serviceRouter);
app.use("/banner", bannerRouter);

module.exports = app;
