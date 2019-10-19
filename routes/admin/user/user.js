let userService = require(__services + 'userService')
module.exports = function (app) {
  $ajax.get('/').then((res)=>{
    console.log(res.query)
    userService.getUserInfo().then((result)=>{
      console.log('step three', result)
      //统一返回格式
      res.response.send({
        code: 200,
        msg: '查询成功',
        data: {
          result: result
        }
      })
      //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
      res.next() 
    })
  }).catch((err)=>{
    console.log(err)
  })
}
