let orderDao = require('../dao/orderDao')

const orderService = {
    async orderProduce(res){
        let result = await orderDao.create(res)
        return result
    },
    async orderSelect(){
        let result = await orderDao.select()
        return result
    }
}
module.exports = orderService