const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const { JWT_KEY_SECRET } = require("../config");

const {
  getAllTasks,
  getTaskById,
  getAllTasksByProjectId,
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/tasksControllers");

//INDEX
router.get("/", getAllTasks);

//GET TASK BY ID
router.get("/:id", getTaskById);

//GET ALL TASKS BY THEIR PROJECT ID
router.get("/project/:id", getAllTasksByProjectId);

//CREATE
router.post("/", createTask);

//EDIT TASK BY ID ........... PUT --> UPDATE
router.put("/:id", editTask);

//DELETE
router.delete("/:id", deleteTask);

//===================

module.exports = router;
