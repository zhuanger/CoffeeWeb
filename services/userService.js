let userDao = require('../dao/userDao')

const UserService = {
  async getUserInfo(){
    let res = await userDao.query()
    return res
  }
}
module.exports = UserService