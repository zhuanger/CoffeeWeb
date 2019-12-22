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
  async addUser(res){
    let result = await userDao.addUser(res);
    return result
  }
}
module.exports = UserService