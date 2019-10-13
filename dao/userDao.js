let dataBase = require(__utils + 'dataBase')

let userDao = {
  query(){
    return new Promise((reslove, reject)=>{
      dataBase().getConnectionAsync().then((connected)=>{
        connected.query('SELECT 1 + 1 AS solution', function(err,res){
          reslove(res) 
        })    
      })
    })
  }
}

module.exports = userDao