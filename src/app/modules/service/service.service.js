const express = require("express");
const ServiceModel = require("./service.model");
const mongoose = require("mongoose");

const createServiceService = async (data) => {
  const createService = await ServiceModel.create(data);
  return createService;
};

const getAllServiceService = async () => {
  const findService = await ServiceModel.find();
  return findService;
};

const getSingleServiceService = async (id) => {
  const findSingleService = await ServiceModel.findOne({ _id: id });
  return findSingleService;
};
module.exports = {
  createServiceService,
  getAllServiceService,
  getSingleServiceService,
};

// database er shathe bojhapora hobe
