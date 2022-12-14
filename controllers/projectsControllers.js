const { Project } = require('../models')

//=========== CONTROLLERS

//INDEX ---> CONTROLLER
const getAllProjects = (req, res, next) => {
  Project.find().then((projects) => {
    res.json(projects);
  });
};

//GET PROJECT BY ID ---> CONTROLLER
const getProjectById = (req, res, next) => {
  Project.findById(req.params.id).then((project) => {
    res.json(project);
  });
};

//CREATE ---> CONTROLLER
const createProject = (req, res, next) => {
  Project.create(req.body).then((project) => {
    res.json(project);
  });
};

//EDIT PROJECT BY ID ...........CONTROLLER
const editProject = (req, res, next) => {
  Project.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  ).then((project) => {
    res.json(project);
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
