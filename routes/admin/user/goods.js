let goodService = require(__services + 'goodService')
module.exports = function (app) {
    //创建一个商品
    $ajax.post('/goods').then((res)=>{  // res -> {res.query,req,next}
      goodService.CreateGood(res).then((result)=>{
      //统一返回格式
        res.response.send({
          code: 200,
          msg: '创建成功',
          data: {
            result: result
          }
        })
        //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
        res.next() 
      })
    }).catch((err)=>{
    console.log(err)
    });
    //获取所有商品
    $ajax.get('/goods').then((res)=>{
      goodService.getAllGoods().then((result)=>{
        res.response.send({
          code:200,
          msg: '查询成功',
          data:{
            result: result
          }
        })
        res.next() 
      })
    }).catch((err)=>{
    console.log(err)
    });
    $ajax.get('/goodsinfo/:id').then((res)=>{
      goodService.SelectOneGood(res).then((result)=>{
        res.response.send({
          code: 200,
          msg: '查询成功',
          data:{
            result: result
          }
        })
        res.next()
      })
    }).catch((err)=>{
      console.log(err)
    })
}