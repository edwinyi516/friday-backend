const mongoose = require("mongoose");
const {Project} = require('../models') 

mongoose.Promise = global.Promise;

const { JWT_KEY_SECRET } = require("../config");

//=========== CONTROLLERS

//INDEX ---> CONTROLLER
const getAllProjects = (req, res, next) => {
  Project.find().then((projects) => {
    res.json(projects[0].easyRead());
  });
};

//GET PROJECT BY ID ---> CONTROLLER
const getProjectById = (req, res, next) => {
  Project.findById(req.params.id).then((project) => {
    res.json(project.easyRead());
  });
};

//CREATE ---> CONTROLLER
const createProject = (req, res, next) => {
  Project.create(req.body).then((project) => {
    res.json(project.easyRead());
  });
};

//EDIT PROJECT BY ID ...........CONTROLLER
const editProject = (req, res, next) => {
  Project.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  ).then((project) => {
    res.json(project.easyRead());
  });
};

//DELETE  ---> CONTROLLER
const deleteProject = (req, res, next) => {
  Project.findByIdAndDelete(req.params.id).then(() => {
    res.json(`Deleted project with id of ${req.params.id}`);
  });
};

//========================

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  editProject,
  deleteProject,
};
