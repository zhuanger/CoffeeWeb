let userService = require(__services + 'userService');
module.exports = function (app) {
  app.post('/updateUserInfo', function(req, res, next){  
    userService.updateUserInfo($transformData(req.body)).then((result)=>{
      res.send({
        code: 200,
        msg: '修改成功'
      })
    })
  })
}