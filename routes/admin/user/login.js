let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/login', function(req, res, next){
    let data = $transformData(req.body);
    userService.loginUser(data).then((result)=>{
      //统一返回格式
      let _msg = {
        200: '查询成功',
        201: '输入的账号有误',
        202: '密码错误'
      }
      res.send({
        code: result.code,
        msg: _msg[result.code],
        data: result
      })
      //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
      // res.next();
    })
  })
  // app.post('/login').then((res)=>{
  //   userService.loginUser(res).then((result)=>{
  //     //统一返回格式
  //     console.log('----------------', result);
  //     let _msg = {
  //       200: '查询成功',
  //       201: '输入的账号有误',
  //       202: '密码错误'
  //     }
  //     console.log('----------res.spone');
  //     res.response.send({
  //       code: result.code,
  //       msg: _msg[result.code],
  //       data: result
  //     })
  //     //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
  //     // res.next();
  //   })
  // }).catch((err)=>{
  //   console.log(err)
  // });
}
