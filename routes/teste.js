const data = require('../src/teste');
module.exports  = function(server){    
    server.get(
        '/',
        data.dados
    );
}