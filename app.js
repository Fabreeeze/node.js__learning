const http = require('http')

const routes = require('./routes');
// here routes accepts an object as imported stuff


const server = http.createServer(routes.handler);

server.listen(4000);
