const express = require("express");
const BannerModel = require("./banner.model");

const createBannerService = async (data) => {
  const createBanner = BannerModel.create(data);
  return createBanner;
};

module.exports = {
  createBannerService,
};
