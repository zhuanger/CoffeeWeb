let userModel = require(__model + 'userModel.js')
let roleModel = require(__model + 'roleModel.js')

let userDao = {
  addUser(res){
    return new Promise((reslove, reject)=>{
      //增加一个用户，注册
      userModel.create({username: res.body.username, password: res.body.password, role_id: 1}).then((res)=>{
        reslove(res);
      })
    })
  },
  query(){
    return new Promise((reslove, reject)=>{
      //查询所有用户
      userModel.findAll().then((res)=>{
        reslove(res);
      })
    })
  },
  login(data){
    // 登录
    return new Promise((reslove, reject)=>{
      userModel.findOne({
        where: {username: data.body.username}
      }).then((res)=>{  
        if(res === null){
          // 账号错误
          reslove({code: 201});
        }else{
          let user = res.dataValues;
          if(user.password !== data.body.password){
            // 密码错误
            reslove({code: 202});
          }else{
            if(user.avatar === null){
              user.avatar = $constant.avatar
            }
            let data = {
              code: 200,
              roleId: user.role_id,
              avatar: user.avatar
            };
            reslove(data);
          }
        }
      })
    })
  }
}

module.exports = userDao