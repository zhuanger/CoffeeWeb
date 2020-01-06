let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/setRole', function(req, res, next){
    userService.setRole(req.body).then(()=>{
      //统一返回格式
      res.send({
        code: 200,
        msg: '修改成功',
      })
    })
  })
}
