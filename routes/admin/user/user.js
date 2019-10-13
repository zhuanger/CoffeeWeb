let userService = require(__services + 'userService')
module.exports = function (app) {
  $ajax.get('/').then((res)=>{
    userService.getUserInfo().then((res)=>{
      console.log('connection', res)
    })
  }).catch((err)=>{

  })
}
