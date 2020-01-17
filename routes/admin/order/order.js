let orderService = require(__services + 'orderService')
module.exports = function (app) {
  app.post('/orders', function(req, res, next){
    orderService.orderProduce(req.body).then((result)=>{
      res.send({
        code: 200,
        msg: '保存成功',
            data: result
          })
        })
    });
}
