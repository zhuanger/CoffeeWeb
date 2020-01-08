let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 查询最热的饮品,限制五条
    app.post('/hotgoods', function(req, res, next){
        goodService.SelectHotGoods(req).then((result)=>{
          res.send({
            code: 200,
            msg: '查询成功',
            data: result
          })
        })
    })
}