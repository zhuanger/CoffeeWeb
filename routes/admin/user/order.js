let orderService = require(__services + 'orderService')
module.exports = function (app) {
    $ajax.post('/orders').then((res)=>{
        console.log(res.params)
        orderService.orderProduce(res).then((result)=>{
            res.response.send({
                code: 200,
                msg: '保存成功',
                data: {
                    result: result
                }
            })
            res.next() 
        })
    }).catch((err)=>{
        console.log(err)
      })
}
module.exports = function (app) {
    $ajax.get('/orders').then((res)=>{
        console.log('enter')
        orderService.orderSelect().then((result)=>{
            res.response.send({
                code: 200,
                msg: '查询成功',
                data: {
                    result: result
                }
            })
            res.next() 
        })
    }).catch((err)=>{
        console.log(err)
      })
}