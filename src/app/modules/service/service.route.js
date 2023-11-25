const express = require("express");
const {
  createServiceController,
  getAllServiceController,
} = require("./service.controller");

const router = express.Router();

router.post("/", createServiceController);
router.get("/", getAllServiceController);

module.exports = router;
