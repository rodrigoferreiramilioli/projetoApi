const restify = require('restify');
const calltest = require('./routes/teste');
const server = restify.createServer();
server.listen(3000);
calltest(server);