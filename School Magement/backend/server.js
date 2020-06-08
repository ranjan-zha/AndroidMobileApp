const http = require('http');
const app = require('./app.js');

const port = 3003;
console.log('app running on port... =>',port);

const server = http.createServer(app);

server.listen(port);