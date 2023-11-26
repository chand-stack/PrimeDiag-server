const express = require("express");
const { createBannerController } = require("./banner.controller");

const router = express.Router();

router.post("/", createBannerController);

module.exports = router;
