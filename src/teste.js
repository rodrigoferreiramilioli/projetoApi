const dataRequest = require('../model/teste');
module.exports.dados = function (req, res, next){
    async function getdata (){        
        const data = await dataRequest.datarequest();
        const saveSql = await dataRequest.dataSql(data);
        console.log(saveSql);
        return data;
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