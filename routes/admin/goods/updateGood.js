let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 查询最新的饮品,限制五条
    app.post('/updateGood', function(req, res, next){
      console.log('req', req.body);
        goodService.updateGood(req).then((result)=>{
          res.send({
            code: 200,
            msg: '查询成功',
            data: result
          })
        })
    })
}