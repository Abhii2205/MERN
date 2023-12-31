const express = require('express');
const router = express.Router();
const userModel = require('./userSchema');


router.post('/',(request,response)=>{
    const newUser = new userModel({
        id: request.body.id,
        pass:request.body.pass
    });

    newUser.save()
    .then(savedStudent => console.log('New student saved:', savedStudent))
    .catch(error => console.error('Error saving new student:', error));

    response.send(`User registered ${request.body.id}`);
})

module.exports = router;