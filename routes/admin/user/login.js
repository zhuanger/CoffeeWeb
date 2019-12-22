let userService = require(__services + 'userService')
module.exports = function (app) {
  $ajax.post('/login').then((res)=>{
    userService.loginUser(res).then((result)=>{
      //统一返回格式
      res.response.send({
        code: 200,
        msg: '查询成功',
        data: {
          result: result
        }
      })
      //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
      res.next();
    })
  }).catch((err)=>{
    console.log(err)
    });
  //get请求,页面没有先写个请求
  $ajax.get('/login').then((res)=>{
    res.response.send('login的get请求');
    res.next();
  }).catch((err)=>{
    console.log(err)
    })
}
