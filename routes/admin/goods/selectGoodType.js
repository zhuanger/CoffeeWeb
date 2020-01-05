let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 查询饮品有多少种分类
    app.get('/goodtypes', function(req, res, next){
        goodService.SelectGoodType().then((result)=>{
          res.send({
            code: 200,
            msg: '查询成功',
            data:result
          })
        })
    })
}