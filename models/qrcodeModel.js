const Sequelize = require('sequelize');
const sequelize = require(__utils + 'dataBase.js')
const Qrcode = sequelize.define('qr_codes',{
    id:{
        primaryKey: true,
        allowNull: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
    },
    image:{
        type: Sequelize.BLOB('medium')
    }
},{
    timestamps: false,  // 解决findall时候出现unknown createdAt
    charset: 'utf8',
  }
)
module.exports = Qrcode