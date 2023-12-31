const express = require('express');
const router = express.Router();

const id = "Abhi";
const pass = "1234";
const UserModel = require('./userSchema')

router.post('/malik',(request,response)=>{
    if(request.headers.id==id){
        if(request.headers.pass==pass){
            response.send(`Hi ${id}, welcome to postman`);

            const user1 = new UserModel({
                id: request.headers.id,
                pass: request.headers.pass
            });

            user1.save()
            .then(savedStudent => console.log('New student saved:', savedStudent))
            .catch(error => console.error('Error saving new student:', error));

        }
        else response.send(`Incorrect password for ${request.headers.id}`);
    }

    else{
        response.send('Incorrect username');
    }
});

// const {studID, phNumber} = request.headers;

router.post('/student',(request,response)=>{
    const {studid, phnumber} = request.headers;
    console.log(request.headers);

    // if(studid=="123") response.send("Hi 123");
    // else response.send("Incorrect");

    if(phnumber.toString().length===10){  
        response.send(`Valid phone number ${phnumber}`)
    }
    else response.send(`Incorrect phone number ${phnumber}`);
});
        

module.exports = router;