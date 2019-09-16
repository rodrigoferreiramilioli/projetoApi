const request = require('request');
const config = require('../dao/config').configSql();
const sql = require('mssql');
function datarequest (){
    return new Promise ((resolve, reject) =>{
        request.get('https://jsonplaceholder.typicode.com/todos/1', function(err,res){            
            resolve(res.body);
        })        
    });
}

async function dataSql(sendSql){ 
    let conn = await sql.connect(config);
    let ret = await conn.request()
        .input('json_dado', sql.VarChar(sql.MAX),sendSql)
        .query('insert into jsonteste values (@json_dado)');
    await sql.close(conn);   
    return true;
}

module.exports.datarequest = datarequest;
module.exports.dataSql = dataSql;