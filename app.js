const http = require('http')

const express = require('express')

// const routes = require('./routes')
// here routes accepts an object as imported stuff

const app= express();

app.use( (req,res,next) => {
    console.log("inside middleware");
    //this function acts like a middleware


    // next()
    //next passed in arguements is a fucntion which allows the enxt middleware to be executed

    res.send("<h1>using express here </h1>");
});

const server = http.createServer(app);

server.listen(4000);
