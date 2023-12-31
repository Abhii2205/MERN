
const {port, mongoDBURL} = require('./config');
const express = require('express');

console.log(port);


const app = require('./connectDatabase');

// app.listen(port,()=>{
//   console.log(`Running at port ${port}`) 
// })

// Body parser middleware
app.use(express.json({extended: false}));


app.get('/',(request,response)=>{
  const htmlResp = `
  <p>
  Hi bois
  </p> `
  response.send(htmlResp);
});
  

app.use('/users',require('./users'));

app.use('/validateLogin',require('./validateLogin'));

app.use('/registerUser',require('./registerUser'));

app.use('/authorize',require('./authorize'));

app.use('/authorizedRouter',require('./autorizedRouter'));

app.use('/doIexist',require('./checkExistence'));


