let orderService = require(__services + 'orderService')
module.exports = function (app) {
  app.post('/getAllOrder', function(req, res, next){
    orderService.getAllOrder(req.body).then((result)=>{
      res.send({
        code: 200,
        msg: '保存成功',
          data: result
        })
      })
    });
}
