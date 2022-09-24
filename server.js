/* == External Modules == */
const express = require('express')
//import cors
const cors =require('cors')
/* == Internal Modules == */
const routes = require('./routes')

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

/* == Routes == */

app.listen(PORT, () => {
  console.log('🎉🎊', 'Friday backend happening on port', PORT, '🎉🎊',)
})
