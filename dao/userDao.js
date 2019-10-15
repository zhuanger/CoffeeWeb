let userModel = require(__model + 'userModel.js')

let userDao = {
  query(){
    return new Promise((reslove, reject)=>{
      // console.log(userModel.findAll)
      userModel.findAll().then((res)=>{
        console.log(res)
      })
    })
  }
}

module.exports = userDao