let userService = require(__services + 'userService')
module.exports = function (app) {
  app.post('/addUser', function(req, res, next){
    let data = $transformData(req.body);
    userService.addUser(data).then((result)=>{
      console.log('result', result);
      res.send({
        code: 200,
        msg: '创建成功',
        data: result
      })
      res.next();
    })
  })
}