let goodService = require(__services + 'goodService')
module.exports = function (app) {
    //创建一杯饮品
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
    //获取所有饮品
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
    // 根据id获取一件饮品的信息
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
    });
    // 查询饮品有多少种分类
    $ajax.get('/goodtypes').then((res)=>{
      goodService.SelectGoodType(res).then((result)=>{
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
    });
    // 新建分类
    $ajax.post('/createtype').then((res)=>{
      goodService.CreateType(res).then((result)=>{
        res.response.send({
          code: 200,
          msg: '新建成功',
          data:{
            result: result
          }
        })
        res.next()
      })
    }).catch((err)=>{
      console.log(err)
    });
    // 通过分类的id聚合饮品
    $ajax.get('/goodtypesinfo/:good_types_id').then((res)=>{
      goodService.SelectGoodTypeInfo(res).then((result)=>{
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
    });
    // 查询最热的饮品,限制五条
    $ajax.get('/hotgoods').then((res)=>{
      goodService.SelectHotGoods().then((result)=>{
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
    });
    // 查询最新的饮品,限制五条
    $ajax.get('/newgoods').then((res)=>{
      goodService.SelectNewGoods().then((result)=>{
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