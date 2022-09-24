/* == External Modules == */
const express = require('express')
//import cors
const cors =require('cors')
/* == Internal Modules == */
// const routes = require('./routes')

// import {tasksRouter,projectsRouter,usersRouter} from './routes'
//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system:
// mongoose.Promise = global.Promise;


const tasksRouter = require("./routers/tasksRouter");
const usersRouter = require("./routers/usersRouter");
const projectsRouter = require("./routers/projectsRouter");
/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == DB connection == */
require('./config/db.connection')

/* == Middleware == */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//INSERT USER ROUTES HERE:
app.use("/users", usersRouter);
//---------------------------------------------------------------------------
//INSERT PROJECT ROUTES HERE:
app.use("/projects", projectsRouter);
//---------------------------------------------------------------------------
//INSERT TASK ROUTES HERE:
app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log('🎉🎊', 'Friday backend happening on port', PORT, '🎉🎊',)
})
