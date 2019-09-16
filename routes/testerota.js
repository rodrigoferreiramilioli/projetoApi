const teste = require('../src/teste');
module.exports = function (server){
    server.get(
        '/teste',
        teste.dados
    )
}