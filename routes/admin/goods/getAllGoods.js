let goodService = require(__services + 'goodService');
module.exports = function (app) {
  //获取所有饮品
  app.post('/getAllGoods', function(req, res, next){
    goodService.getAllGoodsImport(req).then((result)=>{
      res.send({
        code:200,
        msg: '查询成功',
        data: result
      })
    })
  })
}
