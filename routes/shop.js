const path = require('path')
const express =  require('express')

const router= express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
    //we use __dirname as we need absolute path of our projects address on system
    //it takes absolute path of current file in system, then we go up an level and then 
    // next two arguements specify repsctive folder and file
     
    //path.join adjusts the slashes used '/'(linux) or '\'(windows) based on operating system automatically
});



module.exports = router;