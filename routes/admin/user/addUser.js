let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/addUser', function(req, res, next){
    // 统一这种格式
    userService.addUser($transformData(req.body)).then((result)=>{
      res.send({
        code: 200,
        msg: '创建成功',
        data: result
      })
    })
  })
}