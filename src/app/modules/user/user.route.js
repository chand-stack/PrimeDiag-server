const express = require("express");
const { createUserController } = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);

module.exports = router;
