const express = require('express');

const userModel = require('./userSchema');
const router = express.Router();





router.get('/',async(request,response)=>{
    const userID = request.headers.id;
    try{
        const User = await userModel.findOne({id: userID});
        // if (User.length > 0) {
        //     response.send(`Hi ${User[0].id}, you exist!`); // Assuming you want to extract the first user
        // } else {
        //     response.send(`User with id ${userID} not found.`);
        // }
        if(User) response.send(`Hi ${User.id}, you exist!`);
        else response.send(`User with id ${userID} not found.`);
    }
    catch(error){
        response.send(`Error finding the user ${userID} with error ${error}`);
    }

});

module.exports = router;