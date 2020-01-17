let qrcodeService = require(__services + 'qrcodeService');
module.exports = function (app) {
  // 查询收款二维码
  app.post('/getQrCode', function(req, res, next){
    qrcodeService.getQrCode().then((result)=>{
      res.send({
          code: 200,
          msg: '查询成功',
          data: result
        })
      })
    });
}

