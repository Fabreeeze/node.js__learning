const fs = require('fs')


const requestHandler = (req,res) =>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title> button page</title></head> <body><form action="/message" method="POST"><input type="text" name="messageUwu"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(dataChunk) => {
            console.log(dataChunk);
            body.push(dataChunk);
        });
        return req.on('end',() =>{
            const parsedBody =  Buffer.concat(body).toString();
            console.log("parsedBody=" + parsedBody);
            const mssg=parsedBody.split('=')[1];
            fs.writeFile('message.txt',mssg,(err) =>{
                
                res.statusCode=302;
                // 302 os code for redirection
                res.setHeader('Location','/');
                // changes url back to '/'
                return res.end();
            });
            //writeFile takes 3 arguements, file name , message and a function to be execution after its completion

        });
        //code in req.on('end',......) executes at last, after execution of below code
        //this is execution of codes asynchronously
        //so it will give error of cant set headers after they were sent to client , as it is during the end of exectuion 
        //so we add return before the req.on('end',.....) so tht it executes earlier and doesnt give headers error
        
    }
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title> first title UwU</title></head> <body>hello first page </body>');
    res.write('</html>');
    res.end(); 
};

module.exports ={
    handler: requestHandler,
    someText: "some random text"
} ;
// exporting multiple stuff as an object