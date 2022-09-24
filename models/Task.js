const mongoose = require ("mongoose");
const taskSchema = new mongoose.Schema({
  projectId:{type:String,required:true},
  taskName: {type:String,required:true},
  description:{type:String,required:true},
  deadline:{type:Date,required:true},
  creator:{type:String,required:true},
  status:{type:String},
  assignee:{type:String, required:true}
})
const Task =mongoose.model("Task",taskSchema)
module.exports = Task;
