const express = require("express");
const {
  createServiceController,
  getAllServiceController,
  getSingleServiceController,
} = require("./service.controller");

const router = express.Router();

router.post("/", createServiceController);
router.get("/", getAllServiceController);
router.get("/:id", getSingleServiceController);

module.exports = router;
