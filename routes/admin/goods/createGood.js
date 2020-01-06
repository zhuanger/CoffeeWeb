let goodService = require(__services + 'goodService');
module.exports = function (app) {
    //创建一杯饮品
    app.post('/createGoods', function(req, res, next){
        goodService.CreateGood(req).then((result)=>{
          //统一返回格式
            res.send({
                code: 200,
                msg: '创建成功',
                data: {
                  result: result
                }
            })
        })
    })
}