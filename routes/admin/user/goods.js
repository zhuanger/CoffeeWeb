let goodService = require(__services + 'goodService')
module.exports = function (app) {
    $ajax.get('/goods').then((res)=>{  // res -> {res.query,req,next}
      console.log(res.query.id)
      goodService.getGoodInfo(res).then((result)=>{
        console.log('step three', result)
      //统一返回格式
        res.response.send({
          code: 200,
          msg: '查询成功',
          data: {
            product: result.product,
            component: result.component,
            price: result.price,
            stock: result.stock
          }
        })
        //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
        res.next() 
      })
    }).catch((err)=>{
    console.log(err)
    })
}