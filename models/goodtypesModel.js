const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const GoodTypes = sequelize.define('good_types',{
    id:{
        primaryKey: true,
        allowNull: true,
        type: Sequelize.INTEGER,
        autoIncrement:true, 
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false,  // 解决findall时候出现unknown createdAt
  })
module.exports = GoodTypes