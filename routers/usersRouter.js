const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {User} =require('../models');

mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT, JWT_KEY_SECRET } = require("../config");

const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/usersController");

//INDEX
router.get("/", getAllUsers);

//GET USER BY ID
router.get("/:id", getUserById);

//CREATE
router.post("/", createUser);

//EDIT USER BY ID ............ PUT --> UPDATE
router.put("/:id", editUser);

//DELETE
router.delete("/:id", deleteUser);

//===================

module.exports = router;
