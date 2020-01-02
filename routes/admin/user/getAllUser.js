let userService = require(__services + 'userService');
module.exports = function (app) {
  app.post('/getAllUser', function(req, res, next){
    userService.getAllUser().then((result)=>{
      res.send({
        code: 200,
        msg: '创建成功',
        data: result,
        total: result.length
      })
    })
  })
}