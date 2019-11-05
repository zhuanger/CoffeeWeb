let userService = require(__services + 'userService')
module.exports = function (app) {
  $ajax.post('/register').then((res)=>{  // res -> {res.query,req,next}
    let addUser = userService.addUser(res.params.username,res.params.password)
    console.log('addUser', addUser)
    res.response.send({
        code: 200,
        msg: '查询成功',
        data: {
          result: {
                username: res.params.username,
                password: res.params.password
          }
        }
      })
    // userService.getUserInfo().then((result)=>{
    //   console.log('step three', req.body)
    //   //统一返回格式
    //   res.response.send({
    //     code: 200,
    //     msg: '查询成功',
    //     data: {
    //       result: {
    //             'username':req.body.username,
    //             'password':req.body.password
    //       }
    //     }
    //   })
    //   //记得最后加next() https://stackoverflow.com/questions/51535455/express-js-use-async-function-on-requests/51538169#51538169
      res.next() 
    // })
  }).catch((err)=>{
    console.log(err)
  })
}


//对象 Object
// let aa = {
//   a: '1321312'
// }
