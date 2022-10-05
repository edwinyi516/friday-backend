const mongoose = require ('mongoose');
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  creatorID: { type: String, required: true },
  status: { type: String },
  members: { type: [] },
})
const Project = mongoose.model('Project', projectSchema)
module.exports = Project;