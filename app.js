const http = require('http')
const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// const routes = require('./routes')
// here routes accepts an object as imported stuff

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

//app.use() runs for all requests
//app.post() triggers for only post requests
//similarly app.get() woks for get request only

app.use(express.static(path.join(__dirname,'public')));
//this allows us to statically provide read access to certain files directly


app.use('/admin',adminRoutes);
//here '/admin' filters the requests and only requsts goin to '/admin/.... ' are 
//sent throught to this code block
app.use(shopRoutes);
// app.use( (req,res,next) => {
//     // console.log("inside middleware");
//     //this function acts like a middleware

//     // next()
//     //next passed in arguements is a fucntion which allows the enxt middleware to be executed

//     res.send("<h1>using express here </h1>");
// });

app.use((req,res,next)=>{
    //this code is executed when no other app.use() code thingies match and hence is a page not on
    // our site
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(4000);
// const server = http.createServer(app);
// server.listen(4000);
// app.listen(4000) does same work as above two lines