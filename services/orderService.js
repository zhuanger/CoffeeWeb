let orderDao = require('../dao/orderDao')
let qrcodeDao = require('../dao/qrcodeDao')

const orderService = {
    async orderProduce(res){
        let result = await orderDao.create(res)
        return result
    },
    async orderSelect(){
        let result = await orderDao.select()
        return result
    },
    // async uploadQRcode(res){
    //     let result = await qrcodeDao.Create(res)
    //     return result
    // },
    // async selectQRcode(){
    //     let result = await qrcodeDao.Select()
    //     return result
    // }
}
module.exports = orderService