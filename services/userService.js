let userDao = require('../dao/userDao')
const UserService = {
  async loginUser(data){
    let result = await userDao.login(data);
    return result
  },
  async getUserInfo(){
    let res = await userDao.query();
    return res
  },
  async addUser(data){
    let result = await userDao.addUser(data);
    return result
  }
}
module.exports = UserService