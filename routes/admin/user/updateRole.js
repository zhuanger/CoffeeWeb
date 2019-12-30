let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/updaterole', function(req, res, next){
    // 统一这种格式
    userService.updateRole(req.body).then((result)=>{
      let _msg = {
        200: '更新成功',
        201: '店员不存在',
      }
      res.send({
        code: result.code,
        msg: _msg[result.code],
        data: result
      })
    })
  })
}