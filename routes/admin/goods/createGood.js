let goodService = require(__services + 'goodService');
module.exports = function (app) {
    //创建一杯饮品
  app.post('/goods', function(req, res, next){
    let data = $transformData(req.body);
    goodService.CreateGood(data).then((result)=>{
      //统一返回格式
      res.send({
        code: 200,
        msg: '创建成功',
        data: {
          result: result
        }
      })
    })
  })
    
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