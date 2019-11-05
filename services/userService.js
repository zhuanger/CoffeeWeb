let userDao = require('../dao/userDao')

const UserService = {
  async loginUser(res){
    let result = await userDao.select(res)
    return result
  },
  async getUserInfo(){
    console.log('step one')
    let res = await userDao.addUser()
    console.log('step two')

    return res
  },
  async addUser(userName, password){
    let res = await userDao.query(userName, password)
    return res
  }
}
module.exports = UserService