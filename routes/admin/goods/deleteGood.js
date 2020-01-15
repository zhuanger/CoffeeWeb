let goodService = require(__services + 'goodService');
module.exports = function (app) {
    // 删除一杯饮品
    app.post('/deletegoods', function(req, res, next){
        goodService.DeleteGood(req.body).then((result)=>{
          //统一返回格式
            res.send({
                code: 200,
                msg: '删除成功',
                data: {
                  result: result
                }
            })
        })
    })
}