const { Task } = require("../models");

//INDEX ---> CONTROLLER
const getAllTasks = (req, res, next) => {
  Task.find().then((tasks) => {
    res.json(tasks);
  });
};

//GET USER'S TODAY'S TASKS
const getUsersTodaysTasks = (req, res, next) => {
  let today = new Date()
  today.setHours(0,0,0,0)
  Task.find({ $and: [ { assigneeID: req.params.id }, { deadline: today } ] }).then((tasks) => {
    res.json(tasks);
  });
};

//GET USER'S UPCOMING TASKS
const getUsersUpcomingTasks = (req, res, next) => {
  let today = new Date()
  today.setHours(0,0,0,0)
  Task.find({ $and: [ { assigneeID: req.params.id }, { deadline: { $gt: today } } ] }).then((tasks) => {
    res.json(tasks);
  });
};

//GET TASK BY ID ---> CONTROLLER
const getTaskById = (req, res, next) => {
  Task.findById(req.params.id).then((task) => {
    res.json(task);
  });
};

//GET ALL TASKS BY THEIR PROJECT ID
const getAllTasksByProjectId = (req, res, next) => {
  Task.find({ projectID: req.params.id }).then((tasks) => {
    res.json(tasks);
  });
};

//CREATE---> CONTROLLER
const createTask = (req, res, next) => {
  Task.create(req.body).then((task) => {
    res.json(task);
  });
};

//EDIT TASK BY ID ---> CONTROLLER
const editTask = (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).then(
    (task) => {
      res.json(task);
    }
  );
};

//DELETE ---> CONTROLLER
const deleteTask = (req, res, id) => {
  Task.findByIdAndDelete(req.params.id).then(() => {
    res.json(`Deleted project with id of ${req.params.id}`);
  });
};

module.exports = {
  getAllTasks,
  getUsersTodaysTasks,
  getUsersUpcomingTasks,
  getTaskById,
  getAllTasksByProjectId,
  createTask,
  editTask,
  deleteTask,
};
