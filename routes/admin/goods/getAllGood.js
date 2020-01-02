let goodService = require(__services + 'goodService');
module.exports = function (app) {
  //获取所有饮品
  app.post('/allGoods', function(req, res, next){
    goodService.getAllGoods(req).then((result)=>{
      res.send({
        code:200,
        msg: '查询成功',
        data:{
          result: result
        }
      })
    })
  })
}
