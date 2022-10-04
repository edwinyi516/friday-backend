const express = require("express");
const router = express.Router();

const { JWT_KEY_SECRET } = require("../config");

const {
  getAllProjects,
  getProjectById,
  createProject,
  editProject,
  deleteProject,
} = require("../controllers/projectsControllers");

//INDEX
router.get("/", getAllProjects);

//GET PROJECT BY ID
router.get("/:id", getProjectById);

//CREATE
router.post("/", createProject);

//EDIT PROJECT BY ID ........... PUT --> UPDATE
router.put("/:id", editProject);

//DELETE
router.delete("/:id", deleteProject);

//===================

module.exports = router;
