/* == External Modules == */
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //new standard if you want your backend and frontend in separate repos/ living on separate machines

const tasksRouter = require("./routers/tasksRouter");
const usersRouter = require("./routers/usersRouter");
const projecsRouter = require("./routers/projectsRouter");

//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system:
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require("./config");
//IMPORT ROUTERS HERE

/* == Express Instance == */
const app = express(); //creating our express app which allows us to create routes and listen for requests

/* == Middleware == */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//---------------------------------------------------------------------------

//INSERT USER ROUTES HERE:

app.use("/users", usersRouter);

//---------------------------------------------------------------------------

//INSERT PROJECT ROUTES HERE:

app.use("/projects", projecsRouter);

//---------------------------------------------------------------------------

//INSERT TASK ROUTES HERE:

app.use("/tasks", tasksRouter);

//---------------------------------------------------------------------------

mongoose.connect(DATABASE_URL, () => {
  app.listen(PORT, () => {
    console.log("🎉🎊", "Friday backend happening on port", PORT, "🎉🎊");
  });
});

//========================================================
