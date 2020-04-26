let orderModel = require(__model + 'orderModel.js')
let goodModel = require(__model + 'goodsModel.js')

let orderDao = {
    create(res){
        return new Promise((reslove, reject)=>{
          console.log('res.body', res);
          orderModel.create(res).then((res)=>{
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
            let result = {};
            result['pageinfo'] = res;
            orderModel.findAndCountAll({where:{user_id: data.user_id}}).then((resAll)=>{
              result['pagenum'] = Math.ceil(resAll['count'] / 5);
              reslove(result);
            })
        })
      })
    },
    // overtime字段在订单创建时就生成，即订单超时时间为30分钟，超时订单不能再进行付款操作
    // 已付款的订单不能再次进行付款
    UpdatePayStatus(res){
        return new Promise((reslove,reject)=>{
            var now = new Date()
            var order_id = res.body.order_id
            orderModel.findOne(
                {where: {id: order_id}}
            ).then((res)=>{
                var result = {}
                var overtime = new Date(res.dataValues.overtime)
                //数据库获取order_goods中的数据，并转为json对象
                var order_json = JSON.parse(res['dataValues']['order_goods'])
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
                        result['code'] = 200;
                        for (let i = 0; i<order_json.length; i++){
                            //获取订单中每一件商品的id
                            let good_id = order_json[i]['id']
                            //获取订单中每一件商品的购买件数
                            let buy_num = order_json[i]['buyNum']
                            goodModel.findOne({ where: {id:good_id} }).then((res)=>{
                                //更新库存
                                let new_good_sell_num = Number(res['stock']) - Number(buy_num);
                                console.log('new_good_sell_num---->', new_good_sell_num)
                                //更新销量/*  */
                                let sell_num = res['sell_num'] + buy_num
                                goodModel.update(
                                  {stock: new_good_sell_num, sell_num:sell_num}, {where:{id:good_id}}).then((res)=>{
                                    reslove(result)
                                })
                            })
                            
                        }
                    })
                }
            })
        })
    },
    getAllOrder(data){
      return new Promise((reslove) => {
        orderModel.findAll(
          {
            where:{user_id: data.user_id},
          }).then((result)=>{
            reslove(result);
        })
      })
      
    }
}
module.exports = orderDao