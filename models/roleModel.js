const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const Role = sequelize.define('roles', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true, //首先在数据库那里创建一条数据 id为1000
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
module.exports = Role

// createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE,