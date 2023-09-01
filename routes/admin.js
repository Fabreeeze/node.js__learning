const express =  require('express');

const path = require('path');
const rootDir = require('../util/path');

const router= express.Router();

const products = [];

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    //using rootDir allows us to have a base address of root app.js file and prevents us from 
    //using '..' to g back up a level

    //still using '..' in just to showcase the two methods shop.js
});

router.post('/product',(req,res,next)=>{
    // console.log("hellow here!!=====");
    // console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});


module.exports.routes = router;
module.exports.products = products;