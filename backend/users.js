const express = require('express');

const router = express.Router();

router.get('/',(request,response)=>{
    console.log(request.body);
    response.send("Inside Users");
});

router.post('/',(request,response)=>{
    console.log(request.body);
    response.send("Inside User post");
});


module.exports = router;