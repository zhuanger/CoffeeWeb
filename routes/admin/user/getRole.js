let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/getRole', function(req, res, next){
    userService.getRole(req).then((result)=>{
      //统一返回格式
      res.send({
        code: 200,
        data: result
      })
    })
  })
}
