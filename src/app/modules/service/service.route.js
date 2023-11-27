const express = require("express");
const {
  createServiceController,
  getAllServiceController,
  getSingleServiceController,
  deleteSingleServiceController,
} = require("./service.controller");

const router = express.Router();

router.post("/", createServiceController);
router.get("/", getAllServiceController);
router.get("/:id", getSingleServiceController);
router.delete("/:id", deleteSingleServiceController);

module.exports = router;
