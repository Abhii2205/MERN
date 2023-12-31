const express = require('express');
const { request } = require('./connectDatabase');
const auth = require('./authorize');

const router = express.Router();

router.get('/',auth,(request,response)=>{
    response.send("Welcome to protected router");
})

module.exports = router;