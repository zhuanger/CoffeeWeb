let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/deleteUser', function(req, res, next){
    // 统一这种格式
    userService.deleteUser(req.body).then((result)=>{
      res.send({
        code: 200,
        msg: '删除成功',
        data: result
      })
    })
  })
}