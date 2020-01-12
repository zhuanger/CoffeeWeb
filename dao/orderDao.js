let orderModel = require(__model + 'orderModel.js')

let orderDao = {
    create(res){
        return new Promise((reslove, reject)=>{
            orderModel.create(res.body).then((res)=>{
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
    },
    // 搜索店员自己创建的订单
    selectUserOrder(data){
      return new Promise((reslove,reject)=>{
        var page = data.page || 1;
        orderModel.findAll(
          {
              where:{user_id: data.user_id},
              limit: 5,
              offset: 5*(page-1)
          }).then((res)=>{
            let result = {}
            result['pageinfo'] = res;
            orderModel.findAndCountAll().then((resAll)=>{
              result['pagenum'] = Math.ceil(resAll['count'] / 5);
              reslove(result);
            })
        })
      })
    },
    UpdatePayStatus(res){
        return new Promise((reslove,reject)=>{
            var now = new Date()
            var order_id = res.body.order_id
            orderModel.findOne(
                {where: {id: order_id}}
            ).then((res)=>{
                var result = {}
                var overtime = new Date(res.dataValues.overtime)
                if(res.dataValues.whether_pay === 'True'){
                    result['code'] = 202
                    result['info'] = res
                    reslove(result)
                }
                else if(now>overtime){
                    result['code'] = 201
                    result['info'] = res
                    reslove(result)
                }
                else{
                    orderModel.update(
                        {whether_pay: 'True'},
                        {where:{id: order_id}}
                    ).then((res)=>{
                        result['code'] = 200
                        result['info'] = res
                        reslove(result)
                    })
                }
            })
        })
    }
}
module.exports = orderDao