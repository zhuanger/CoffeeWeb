let userDao = require('../dao/userDao')

const UserService = {
  async getUserInfo(){
    console.log('step one')
    let res = await userDao.query()
    console.log('step two')

    return res
  }
}
module.exports = UserService