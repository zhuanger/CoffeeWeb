let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/login', function(req, res, next){
    userService.loginUser(req).then((result)=>{
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
    })
  })
}
