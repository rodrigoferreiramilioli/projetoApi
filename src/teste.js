const dataRequest = require('../model/teste');
module.exports.dados = function (req, res, next){

    async function getdata (){        
        return await dataRequest.datarequest();
    }
    getdata().then((data) => {
        data = JSON.parse(data);
        var message = {
            statusCode: '200',
            messageId: data.id,
            messageTitle: data.title,
            message: 'Process sucess!'
        }
        res.send(200, message);
        return next();
    })    
}