let orderService = require(__services + 'orderService');
module.exports = function(app){
    // todo 做分页
    app.post('/userorders', function(req, res, next){
        orderService.SelectUserGoods($transformData(req.body)).then((result)=>{
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