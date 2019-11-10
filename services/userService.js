let userDao = require('../dao/userDao')

const UserService = {
  async loginUser(res){
    let result = await userDao.select(res)
    return result
  },
  async getUserInfo(){
    console.log('step one')
    let res = await userDao.query()
    console.log('step two')

    return res
  },
  async addUser(res){
    let result = await userDao.addUser(res)
    return result
  }
}
module.exports = UserService