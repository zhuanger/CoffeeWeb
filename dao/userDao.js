let userModel = require(__model + 'userModel.js')
let roleModel = require(__model + 'roleModel.js')

let userDao = {
  addUser(res){
    return new Promise((reslove, reject)=>{
      //增加一个用户，注册
      userModel.create({username: res.params.username, password: res.params.password, role_id: 1}).then((res)=>{
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
        where: {username: data.params.username,password: data.params.password}
      }).then((res)=>{

        console.log('find user res:->', res);
        
        // let user = res.dataValues;
        // console.log('find user info:->', user);
        // roleModel.findOne({
        //   where: {id: res.dataValues.role_id}
        // }).then((res)=>{
        //   let data = {}
        //   let user1 = {}
        //   user1['id'] = user.id
        //   user1['username'] = user.username
        //   user1['avatar'] = user.avatar
        //   data['user'] = user1
        //   data['role'] = res.dataValues
        //   console.log(data)
        //   reslove(data)
        // })
        // reslove(res)
      })
    })
  }
}

module.exports = userDao