let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 查询最新的饮品,限制五条
    app.post('/updateGood', function(req, res, next){
        goodService.updateGood(req).then((result)=>{
          res.send({
            code: 200,
            msg: '更新成功',
            data: result
          })
        })
    })
}