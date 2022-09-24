const mongoose = require ('mongoose')
const express = require('express')
require('dotenv').config()
const db = mongoose.connection
const connectionStr = process.env.MONGODB_URL
console.log(connectionStr)
mongoose.connect(connectionStr)

//set up listeners to monitor your database connection
mongoose.connection.on('connected', ()=> console.log(`Mongodb connect at ${db.host}:${db.port}`));

mongoose.connection.on('error', (err)=> console.log(err.message));

mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));
