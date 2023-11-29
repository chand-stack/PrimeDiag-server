const express = require("express");
const {
  createBannerController,
  getBannerController,
  deleteBannerController,
  selectBannerController,
  unselectBannerController,
} = require("./banner.controller");

const router = express.Router();

router.post("/", createBannerController);
router.get("/", getBannerController);
router.delete("/:id", deleteBannerController);
router.patch("/:id", selectBannerController);
router.patch("/", unselectBannerController);

module.exports = router;
