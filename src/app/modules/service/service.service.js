const express = require("express");
const ServiceModel = require("./service.model");

const createServiceService = async (data) => {
  const createService = await ServiceModel.create(data);
  return createService;
};

const getAllServiceService = async () => {
  const findService = await ServiceModel.find();
  return findService;
};
module.exports = {
  createServiceService,
  getAllServiceService,
};

// database er shathe bojhapora hobe
