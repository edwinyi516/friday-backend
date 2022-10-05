/* == External Modules == */
const express = require("express");
const methodOverride = require("method-override")

const passport = require("passport")
require("./config/passportConfig.js")(passport)

const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const bodyParser = require("body-parser")

require("dotenv").config()
const SESSION_SECRET = process.env.SESSION_SECRET
const MongoDBStore = require('connect-mongodb-session')(session)

//import cors
const cors = require("cors");

app.set('trust proxy', 1)

/* == Internal Modules == */
const { tasksRouter, projectsRouter, usersRouter } = require("./routers");
const morgan = require("morgan");

const User = require("./models/User.js")

/* == Express Instance == */
const app = express();

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == DB connection == */
require("./config/db.connection");

/* == Middleware == */
// app.use(cors({
//   origin: "*",
//   credentials: true
// }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(morgan("dev"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoDBStore({
    uri: process.env.MONGODB_URL,
    collection: "mySessions"
  }),
  cookie: {
    sameSite: "none",
    secure: true
  }
}))

app.use(cookieParser(SESSION_SECRET))

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Origin, X-Requested-With, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE, OPTIONS');
  next();
});

//INSERT USER ROUTES HERE:
app.use("/users", usersRouter);

app.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    console.log("route hit")
    if (err) throw err
    if (!user) res.send ("No user exists")
    else {
      await req.logIn(user, err => {
        if (err) throw err
        res.send("Successfully logged in")
      }      
      )
    }
  }) (req, res, next)
})

app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err
    if (doc) res.send("User already exists")
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
      })
      await newUser.save()
      res.send("User created")
    }
  })
})

app.get("/user", (req, res) => {
  res.send(req.user)
})

//---------------------------------------------------------------------------
//INSERT PROJECT ROUTES HERE:
app.use("/projects", projectsRouter);
//---------------------------------------------------------------------------
//INSERT TASK ROUTES HERE:
app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log("🎉🎊", "Friday backend happening on port", PORT, "🎉🎊");
});
