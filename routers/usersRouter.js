const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../models");

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

router.get("/many/users", (req, res) => {
  let membersArray = [];
  req.query.member.forEach((member) => {
    membersArray.push(mongoose.Types.ObjectId(member));
  });

  User.find({
    _id: {
      $in: [...membersArray],
    },
  }).then((usrs) => {
    res.json(usrs);
  });
});

//CREATE
router.post("/", createUser);

//EDIT USER BY ID ............ PUT --> UPDATE
router.put("/:id", editUser);

//DELETE
router.delete("/:id", deleteUser);

//===================

module.exports = router;
