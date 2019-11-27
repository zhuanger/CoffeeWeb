const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
console.log('sequelize:', sequelize.define);
// const User = require(__model + 'userModel.js')
const User = require(__model + 'userModel.js')
console.log('modle', require('./userModel'));
console.log('dsadsa', User);
const Role = sequelize.define('roles', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true, //首先在数据库那里创建一条数据 id为1000
  },
  userId: {
    type: Sequelize.INTEGER, 
    field: 'user_id',
    unique: true, 
    references: {
        model: 'users',
        key: 'id'
      },
    comment:'用户Id' 
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  describe: {
    type: Sequelize.STRING,
    allowNull: false
  }
  // 时间戳
  
},{
  timestamps: false,  // 解决findall时候出现unknown createdAt
  charset: 'utf8',
})
// Role.associate = function(models){
//   Role.belongsTo(model.User)
// }
console.log('------------------------',Role)

User.hasOne(Role)
module.exports = Role
// createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE,