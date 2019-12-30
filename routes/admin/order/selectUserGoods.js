let orderService = require(__services + 'orderService');
module.exports = function(app){
    app.get('/userorders/:user_id', function(req, res, next){
        orderService.SelectUserGoods(req).then((result)=>{
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