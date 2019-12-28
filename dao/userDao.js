let userModel = require(__model + 'userModel.js')
let roleModel = require(__model + 'roleModel.js')

let userDao = {
  //增加一个用户，注册 
  addUser(data){
    return new Promise((reslove, reject)=>{
      // todo 做多一个查询是否存在此店员 ..这里要时间最新的是第一条 todo 
      userModel.create({username: data.username, password: data.password, role_id: 1}).then((res)=>{
        reslove(res);
      })
    })
  },

  //查询所有用户 todo 这查询所用要做分页查询 
  query(){
    return new Promise((reslove, reject)=>{
      userModel.findAll({
        raw: true
      }).then((res)=>{
        reslove(res);
      })
    })
  },

  // 登录
  login(data){
    return new Promise((reslove, reject)=>{
      let _data = $transformData(data.body);
      userModel.findOne({
        where: {username:_data.username}
      }).then((res)=>{  
        if(res === null){
          // 账号错误
          reslove({code: 201});
        }else{
          let user = res.dataValues;
          if(user.password !== _data.password){
            // 密码错误
            reslove({code: 202});
          }else{
            if(user.avatar === null){
              user.avatar = $constant.avatar
            }
            let data = {
              code: 200,
              role_id: user.role_id,
              avatar: user.avatar
            };
            reslove(data);
          }
        }
      })
    })
  },

  //删除用户
  deleteUser(data){
    return new Promise((reslove, reject)=>{
      userModel.destroy({
        where: {
          id: data.id
        }
      }).then((res)=>{
        reslove(res);
      })
    })
  }

  //修改用户权限 todo
}

module.exports = userDao