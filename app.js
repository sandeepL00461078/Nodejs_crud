const express = require('express')  // express service rfequired for this app
const app = express()  // start or initialize the express framework 
const mongoose = require('mongoose') // require mongoose -- in terminal > mongod
const url = 'mongodb://localhost:27017'
// Done some changes


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', function(){  // this will give the messge when opened and connected
    console.log('connected...')
    console.log("chnaged")
})

