let orderService = require(__services + 'orderService')
module.exports = function (app) {
  app.post('/orders', function(req, res, next){
    orderService.orderProduce(req).then((result)=>{
      res.send({
        code: 200,
        msg: '保存成功',
            data: {
                result: result
                }
            })
        })
    });
    app.get('/orders', function(req, res, next){
        orderService.orderSelect().then((result)=>{
            res.send({
                code: 200,
                msg: '查询成功',
                data: {
                    result: result
                }
            })
        })
    });
}
