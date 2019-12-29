let userDao = require('../dao/userDao')
const UserService = {
  async loginUser(data){
    let result = await userDao.login(data);
    return result
  },
  async getAllUser(){
    let res = await userDao.query();
    return res
  },
  async addUser(data){
    let result = await userDao.addUser(data);
    return result
  },
  async deleteUser(data){
    // 应该在service层处理数据...
    let result = await userDao.deleteUser(data);
    return result
  },
}
module.exports = UserService