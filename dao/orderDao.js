let orderModel = require(__model + 'orderModel.js')

let orderDao = {
    create(res){
        return new Promise((reslove, reject)=>{
            orderModel.create(res.params).then((res)=>{
                reslove(res)
            })
        })
    },
    // 记录订单详细信息，json->拿到你订单相应物品及物品数量 res = { username:"weicong",detail:[{a:1},{b,2}]}
    // detailmodel.create ->a商品和数量，json化到数据库
    select(){
        return new Promise((reslove, reject)=>{
            orderModel.findAll().then((res)=>{
                reslove(res)
            })
        })
    }
}
module.exports = orderDao