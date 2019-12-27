let goodService = require(__services + 'goodService');
module.exports = function(app){
    // 通过分类的id聚合饮品
    app.get('/goodtypesinfo/:good_types_id', function(req, res, next){
        goodService.SelectGoodTypeInfo(req).then((result)=>{
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