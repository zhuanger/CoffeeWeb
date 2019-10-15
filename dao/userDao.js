let dataBase = require(__utils + 'dataBase')

let userDao = {
  query(){
    return new Promise((reslove, reject)=>{
      dataBase().getConnectionAsync().then((connected)=>{
        connected.query('SELECT name From users', function(err,res){
          console.log(res)
          reslove(res) 
        })    
      })
    })
  }
}

module.exports = userDao