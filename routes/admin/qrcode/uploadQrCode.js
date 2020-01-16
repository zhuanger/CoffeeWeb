let qrcodeService = require(__services + 'qrcodeService');
module.exports = function (app) {
  // 上传收款二维码
  app.post('/updateQrcode', function(req, res, next){
    qrcodeService.qrcodeUpdate(req).then((result)=>{
      res.send({
        code: 200,
        msg: '创建成功',
        data: result
      })
    })
  });
}
