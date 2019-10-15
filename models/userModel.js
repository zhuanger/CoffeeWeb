const Sequelize = require('sequelize');
const User = Sequelize.define('user', {
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
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})
module.exports = User