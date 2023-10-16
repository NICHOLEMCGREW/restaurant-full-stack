const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const exp = require('constants');
require('dotenv').config();

//may see bodyParser, but was replaced by middleware
//const bodyParser = require('body-parser);

const app = express()

//Middleware
//translate data into a readable format
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
    console.log("Connected to MongoDb")
})

//Start server
const PORT = 4000
app.listen()