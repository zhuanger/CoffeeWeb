let userService = require(__services + 'userService');
module.exports = function (app) {
  app.post('/getAllUser', function(req, res, next){
    userService.getAllUser(req.body).then((result)=>{
      res.send({
        code: 200,
        msg: '查询成功',
        data: result,
        total: result.length
      })
    })
  })
}