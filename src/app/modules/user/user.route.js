const express = require("express");
const {
  createUserController,
  getAllUserController,
  makeAdminController,
  getSingleUserController,
  makeUserAdminController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/", getAllUserController);
router.patch("/:id", makeAdminController);
router.patch("/:id", makeUserAdminController);
router.get("/:email", getSingleUserController);

module.exports = router;
