const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const Good = sequelize.define('goods',{
    id:{
        primaryKey: true,
        allowNull: true,
        type: Sequelize.INTEGER,
        autoIncrement:true, 
    },
    product:{
        type: Sequelize.STRING,
        // allowNull = false,
    },
    component:{
        type: Sequelize.STRING,
        // allowNull = true,
    },
    image:{
        type: Sequelize.BLOB('medium')
    },
    price:{
        type: Sequelize.DECIMAL(20, 2)
    },
    stock:{
        type: Sequelize.INTEGER,
        // allowNull = false,
    },
    sell_num:{
        type: Sequelize.INTEGER,
        // allowNull = false,
    },
    add_date:{
        type: Sequelize.DATE,
    },
    shelf_situation:{
        type: Sequelize.ENUM('True', 'False') ,
        // allowNull = false
    },
    good_types_id: {
        type: Number
    }
},{
    timestamps: false,  // 解决findall时候出现unknown createdAt
  })
  module.exports = Good