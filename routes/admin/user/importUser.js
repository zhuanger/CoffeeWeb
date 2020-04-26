let userService = require(__services + 'userService');
module.exports = function (app) {
  app.post('/importUser', function(req, res, next){
    userService.importUser(req.body).then((result)=>{
      res.send({
        code: 200,
        msg: '查询成功',
        data: result,
      })
    })
  })
}