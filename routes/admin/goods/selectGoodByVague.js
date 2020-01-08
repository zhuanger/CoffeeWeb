let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 通过名字模糊查询饮品
    app.post('/selectgood', function(req, res, next){
        goodService.SelectGoodByVague(req).then((result)=>{
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