const mongoose = require('mongoose');
const express = require('express');
const { port, mongoDBURL } = require('./config');
// const app = require('./server');

const app = express();

// MongoDB connection
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('Database Connected');
    })
  .catch(err => console.log(err));

  app.listen(port,()=>{
    console.log(`Running at port ${port}`) 
  })

  module.exports = app;
