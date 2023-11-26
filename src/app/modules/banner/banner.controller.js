const express = require("express");
const { createBannerService } = require("./banner.service");

const createBannerController = async (req, res) => {
  try {
    const data = req.body;
    const bannner = await createBannerService(data);
    res.status(201).json({
      status: "success",
      message: "successfully created a new service",
      data: bannner,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "somethin went wrong",
      data: error,
    });
  }
};

module.exports = {
  createBannerController,
};
