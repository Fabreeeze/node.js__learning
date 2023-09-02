const path = require('path')
const express =  require('express')

const router= express.Router();

const adminData = require('./admin');

router.get('/',(req,res,next)=>{
    const products = adminData.products;
    res.render('shop',{prods: products, docTitle: 'Shop'});
    //data is passed as an object containing key value pairs

    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
//we using templating engines like pug, ejs etc now, so commented out this above line

    //we use __dirname as we need absolute path of our projects address on system
    //it takes absolute path of current file in system, then we go up an level and then 
    // next two arguements specify repsctive folder and file
     
    //path.join adjusts the slashes used '/'(linux) or '\'(windows) based on operating system automatically

    console.log('shop js here',adminData.products,adminData.products[0]);
    //this data in products here is stored for all browsers on our system when they access localhost:4000
    //even for all ids. This data is stored on our node server, which in real cases is rarely what we require
    //so this method isnt used, just done here for explanation of how to
        

});



module.exports = router;