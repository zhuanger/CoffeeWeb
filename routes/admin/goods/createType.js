let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 新建分类
    app.post('/createtype', function(req, res, next){
        goodService.CreateType(req).then((result)=>{
            res.send({
                code: 200,
                msg: '创建成功',
                data:{
                    result: result
                }
            })
        })
    })
}