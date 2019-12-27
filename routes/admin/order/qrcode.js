let qrcodeService = require(__services + 'qrcodeService')
module.exports = function (app) {
    // 查询收款二维码
    app.get('/selectqrcode', function(req, res, next){
        qrcodeService.qrcodeSelect().then((result)=>{
            res.send({
                code: 200,
                msg: '查询成功',
                data: {
                    result: result
                }
            })
        })
    });
    // 上传收款二维码
    app.post('/uploadqrcode', function(req, res, next){
        qrcodeService.qrcodeCreate(req).then((result)=>{
            res.send({
                code: 200,
                msg: '创建成功',
                data: {
                    result: result
                }
            })
        })
    });
}
