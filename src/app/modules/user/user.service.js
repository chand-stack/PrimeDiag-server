const express = require("express");
const UserModel = require("./user.model");

const createUserService = async (data) => {
  const user = UserModel.create(data);
  return user;
};
const getAllUserService = async () => {
  const getUser = UserModel.find();
  return getUser;
};

const makeAdminService = async (id, data) => {};

module.exports = {
  createUserService,
  getAllUserService,
  makeAdminService,
};
