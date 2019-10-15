const Sequelize = require('sequelize');
const User = Sequelize.define('user', {
  name: {
    type: STRING,
    unique: true, allowNull: false
  },
  userId: {
    primaryKey: true,
    allowNull: false,
    type: STRING,
    autoIncrement:true,
  }
})
module.exports = User