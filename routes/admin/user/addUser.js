let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/addUser', function(req, res, next){
    // 统一这种格式
    userService.addUser(req.body).then((result)=>{
      let _msg = {
        200: '查询成功',
        201: '店员已存在',
      }
      res.send({
        code: result.code,
        msg: _msg[result.code],
        data: result
      })
    })
  })
}