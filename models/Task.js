const mongoose = require ("mongoose");
const taskSchema = new mongoose.Schema({
  projectID: { type: String, required: true },
  taskName: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  creatorID: { type: String, required: true },
  status: { type: String },
  assigneeID: { type: String, required: true }
})
const Task = mongoose.model("Task", taskSchema)
module.exports = Task;
