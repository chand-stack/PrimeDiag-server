const express = require("express");
const {
  createUserController,
  getAllUserController,
  makeAdminController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/", getAllUserController);
router.put("/:id", makeAdminController);

module.exports = router;
