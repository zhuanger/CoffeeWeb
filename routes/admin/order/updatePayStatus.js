let orderService = require(__services + 'orderService')
module.exports = function (app) {
  app.post('/updatepaystatus', function(req, res, next){
    orderService.UpdatePayStatus(req).then((result)=>{
      //统一返回格式
      let _msg = {
        200: '付款成功',
        201: '订单超时，付款失败',
        // 202: '密码错误'
      }
      res.send({
        code: result.code,
        msg: _msg[result.code],
        data: result
      })
        })
    });
}
