const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getAllTasks,
  getUsersTodaysTasks,
  getUsersUpcomingTasks,
  getTaskById,
  getAllTasksByProjectId,
  createTask,
  editTask,
  deleteTask,
  getUsersTasks,
} = require("../controllers/tasksControllers");

//INDEX
router.get("/", getAllTasks);

//GET USER'S TODAY'S TASKS
router.get("/user/:id/today", getUsersTodaysTasks);

//GET USER'S UPCOMING TASKS
router.get("/user/:id/upcoming", getUsersUpcomingTasks);

router.get("/user/:id", getUsersTasks);

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
