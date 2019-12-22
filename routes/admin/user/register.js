let userService = require(__services + 'userService')
module.exports = function (app) {
  $ajax.post('/register').then((res)=>{  // res -> {params,response,next}
    userService.addUser(res).then((result)=>{
      res.response.send({
        code: 200,
        msg: '创建成功',
        data: {
          result: {
            result: result
          }
        }
      })
      res.next() 
      // 记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
    })
  }).catch((err)=>{
    console.log(err)
  })
}