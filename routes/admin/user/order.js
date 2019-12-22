let orderService = require(__services + 'orderService')
let qrcodeService = require(__services + 'qrcodeService')
module.exports = function (app) {
  $ajax.post('/orders').then((res)=>{
    orderService.orderProduce(res).then((result)=>{
      res.response.send({
        code: 200,
        msg: '保存成功',
        data: {
            result: result
        }
      })
      res.next() 
    })
  }).catch((err)=>{
      console.log(err)
  });
    $ajax.get('/orders').then((res)=>{
        orderService.orderSelect().then((result)=>{
            res.response.send({
                code: 200,
                msg: '查询成功',
                data: {
                    result: result
                }
            })
            res.next() 
        })
    }).catch((err)=>{
        console.log(err)
    });
    // 查询收款二维码
    $ajax.get('/selectqrcode').then((res)=>{
        qrcodeService.qrcodeSelect().then((result)=>{
            res.response.send({
                code: 200,
                msg: '查询成功',
                data: {
                    result: result
                }
            })
            res.next() 
        })
    }).catch((err)=>{
        console.log(err)
    });
    // 上传收款二维码
    $ajax.post('/uploadqrcode').then((res)=>{
        qrcodeService.qrcodeCreate(res).then((result)=>{
            res.response.send({
                code: 200,
                msg: '查询成功',
                data: {
                    result: result
                }
            })
            res.next() 
        })
    }).catch((err)=>{
        console.log(err)
    });
}
