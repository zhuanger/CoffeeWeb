let userDao = require('../dao/userDao')
const UserService = {
  async loginUser(data){
    let result = await userDao.login(data);
    return result
  },
  async getAllUser(data){
    let res = await userDao.query(data);
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
  async getRole(){
    let result = await userDao.getRole();
    return result
  },
  async setRole(data){
    let result = await userDao.setRole(data);
    return result
  },
  async updateUserInfo(data){
    let result = await userDao.updateUserInfo(data);
    return result
  },
  async updateRole(data){
    let result = await userDao.updateRole(data);
    return result
  }
}
module.exports = UserService