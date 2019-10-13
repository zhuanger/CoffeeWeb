
var mysql = require('mysql');
module.exports = function(){
  connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'coffee',
    connectionLimit: 10,
  });
  return connection
   
}
