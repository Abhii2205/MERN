const express = require('express');

module.exports = function(request,response){
    const token = request.headers.token;

    if(!token) response.status(401).send('Token not found, access denied');

    // try{

    //     next();
    // }

    // catch{
    //     response.send("Incorrect token");
    // }

    if(token=="meow") response.send(`Access granted to ${request.headers.id}`);
    
}