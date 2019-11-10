const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const Order = sequelize.define('orders',{
    id:{
        primaryKey: true,
        allowNull: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
    },
    create_time:{
        type: Sequelize.DATE
    },
    sum_money:{
        type: Sequelize.DECIMAL(20, 2)
    },
    whether_pay:{
        type: Sequelize.ENUM('True', 'False')
    },
    order_goods:{
        type: Sequelize.JSON
    }
},{
    timestamps: false,  // 解决findall时候出现unknown createdAt
    })
module.exports = Order