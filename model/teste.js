const request = require('request');
function datarequest (){
    return new Promise ((resolve, reject) =>{
        request.get('https://jsonplaceholder.typicode.com/todos/1', function(err,res){            
            resolve(res.body);
        })        
    });
}

module.exports.datarequest = datarequest;