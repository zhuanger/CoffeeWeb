const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    unique: true, allowNull: false
  },
  userId: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement:true, //首先在数据库那里创建一条数据 id为1000
  },
  // 时间戳
  
},{
  timestamps: false  // 解决findall时候出现unknown createdAt
})
module.exports = User

// createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE,