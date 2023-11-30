const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const setToken = async (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.TOKEN_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({
      status: "success",
      message: "successfully created a new reservation",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = {
  setToken,
};
