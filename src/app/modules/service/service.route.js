const express = require("express");
const {
  createServiceController,
  getAllServiceController,
  getSingleServiceController,
  deleteSingleServiceController,
  updateSingleServiceController,
  getServiceCountController,
} = require("./service.controller");

const router = express.Router();

router.post("/", createServiceController);
router.get("/", getAllServiceController);
router.get("/count", getServiceCountController);
router.get("/:id", getSingleServiceController);
router.delete("/:id", deleteSingleServiceController);
router.patch("/:id", updateSingleServiceController);

module.exports = router;
