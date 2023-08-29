const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

// const routes = require('./routes')
// here routes accepts an object as imported stuff

const app= express();

app.use(bodyParser.urlencoded);

app.use('/add-product', (req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use( (req,res,next) => {
    // console.log("inside middleware");
    //this function acts like a middleware

    // next()
    //next passed in arguements is a fucntion which allows the enxt middleware to be executed

    res.send("<h1>using express here </h1>");
});

app.listen(4000);
// const server = http.createServer(app);
// server.listen(4000);
// app.listen(4000) does same work as above two lines