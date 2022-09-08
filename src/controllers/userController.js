const fs = require("fs");
const User = require("../models/userModel");
const APIFeatures = require("../util/APIFeatures");

exports.getUser = async (req, res) => {
  try {

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "falha",
      message: err.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const features = new APIFeatures(User.find(), req.query).filter().sort();
    const users = await features.query;

    const dataObj = JSON.stringify(users);

    const arrayUser = [newUser];

    const dataUser = JSON.stringify(arrayUser);

    fs.writeFileSync(`${__dirname}/../database/users.json`, dataObj);
    fs.writeFileSync(`${__dirname}/../database/user.json`, dataUser);

    res.status(201).json({
      status: "success",
      message: "cliente cliado com sucesso",
      data: { newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    res.status(204).json({
      status: "sucess",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
