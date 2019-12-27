let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 查询最新的饮品,限制五条
    app.get('/newgoods', function(req, res, next){
        goodService.SelectNewGoods().then((result)=>{
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