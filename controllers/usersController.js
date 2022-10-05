const {User} = require('../models');

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
  User.create(req.body).then((usr) => {
    res.json(usr);
  });
};

//EDIT USER BY ID ............ CONTROLLER
const editUser = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).then(
    (usr) => {
      res.json(usr);
    }
  );
};

const deleteUser = (req, res, next) => {
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
