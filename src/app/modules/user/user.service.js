const express = require("express");
const UserModel = require("./user.model");

const createUserService = async (data) => {
  const user = UserModel.create(data);
  return user;
};

module.exports = {
  createUserService,
};
