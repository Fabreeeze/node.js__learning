const path = require('path')


module.exports=path.dirname(process.mainModule.filename);
//process.mainModule is deprecated btw

//this export command will give root location of the filename passed to it
//this file kinda acts like a helper function, so put in util folder