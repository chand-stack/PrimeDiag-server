const express = require("express");
const cors = require("cors");
const app = express();
const serviceRouter = require("./app/modules/service/service.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server cholche ok");
});

app.use("/service", serviceRouter);
module.exports = app;

/**
 * prothome route
 * controller model service
 *
 */
