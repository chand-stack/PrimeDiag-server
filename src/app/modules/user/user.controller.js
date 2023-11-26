const express = require("express");
const { createUserService } = require("./user.service");

const createUserController = async (req, res) => {
  try {
    const data = req.body;
    const createUser = await createUserService(data);
    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

module.exports = {
  createUserController,
};
