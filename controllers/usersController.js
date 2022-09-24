const mongoose = require("mongoose");
const User = require("../OldModels/user");

mongoose.Promise = global.Promise;

const { JWT_KEY_SECRET } = require("../config");

//--------------------- USER CONTROLLERS

//INDEX --> CONTROLLER/LOGIC
const getAllUsers = (req, res, next) => {
  User.find().then((usrs) => {
    res.json(usrs);
  });
};

//GET USER BY ID --> CONTROLLER
const getUserById = (req, res, next) => {
  User.findById(req.params.id).then((usr) => {
    res.json(usr);
  });
};

//CREATE --> CONTROLLER
const createUser = (req, res, next) => {
  //INSERT Data Validation that loops through array of required keys to prevent incorrect data structure from being posted
  User.create(req.body).then((usr) => {
    res.json(usr);
  });
};

//EDIT USER BY ID ............ CONTROLLER
const editUser = (req, res, next) => {
  //INSERT authorization check to make sure the person trying to edit has permission
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).then(
    (usr) => {
      res.json(usr);
    }
  );
};

const deleteUser = (req, res, next) => {
  //INSERT authorization check to make sure the person trying to edit has permission
  User.findByIdAndDelete(req.params.id).then(() => {
    res.json(`Deleted user with id of ${req.params.id}`);
  });
};

//===================

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
