let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 根据id获取一件饮品的信息
    app.get('/goodsinfo/:id', function(req, res, next){
        goodService.SelectOneGood(req).then((result)=>{
          res.send({
            code: 200,
            msg: '查询成功',
            data:{
              result: result
            }
          })
        })
    })
}