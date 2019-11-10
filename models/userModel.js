const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const User = sequelize.define('users', {
  id: {
    primaryKey: true,
    allowNull: true,
    type: Sequelize.INTEGER,
    autoIncrement:true, //首先在数据库那里创建一条数据 id为1000
  },
  username: {
    type: Sequelize.STRING,
    // unique: true, 
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avatar: {
    type: Sequelize.BLOB('medium')
  }
  // 时间戳
  
},{
  timestamps: false  // 解决findall时候出现unknown createdAt
})
module.exports = User

// createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE,