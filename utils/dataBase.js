
const Sequelize = require('sequelize');
const sequelize = new Sequelize('coffee', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  timezone: '+08:00' 
});
module.exports = sequelize
// module.exports = function(){
//   connection = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'coffee',
//     connectionLimit: 10,
//   });
//   return connection
   
// }
