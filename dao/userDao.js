let userModel = require(__model + 'userModel.js')
let roleModel = require(__model + 'roleModel.js')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let userDao = {
  //增加一个用户，注册 
  addUser(data){
    return new Promise((reslove, reject)=>{
      // todo 做多一个查询是否存在此店员 ..这里要时间最新的是第一条 todo 
      userModel.findOne({where: {username: data.username}}).then((res)=>{
        if(res !== null){
          reslove({code: 201});
        }else{
          userModel.create({username: data.username, password: data.password, role_id: 1, avatar: $constant.avatar}).then((res)=>{
              reslove(res);
            })
        }
      })
    })
  },

  //查询所有用户 todo 这查询所用要做分页查询,需要传自身user_id,查询结果不包含自身 
  query(data){
    return new Promise((reslove, reject)=>{
      var num = data.page
      userModel.findAll({
        where: {
          'id' :{
            [Op.ne] : data.user_id
          }
        },
        limit: 5,
        offset: 5*(num-1),
        'order': [
          ['id', 'DESC']
        ],
        raw: true
      }).then((res)=>{
        let result = {};
        for(let i = 0;i<res.length; i++){
          if(res[i].avatar !== null){
            res[i].avatar = Buffer.from(res[i].avatar).toString('base64');
          }
        }
        result['pageinfo'] = res;
        userModel.findAndCountAll({where: {
          'id' :{
            [Op.ne] : data.user_id
          }
        }}).then((resAll)=>{
          result['pagenum'] = Math.ceil(resAll['count'] / 5);
          reslove(result);
        })
      })
    })
  },
  importUser(data){
    return new Promise((reslove, reject) => {
      let _data = data.body;
      data.list = JSON.parse(data.list).map((item) => {
        item.password = '123456';
        if(item.role_id ==='店员'){
          item.role_id = 1;
          return item
        }else if(item.role_id ==='老板'){
          item.role_id = 2;
          return item
        }
      })
      userModel.bulkCreate(data.list, {raw: true}).then((result ) => {
        console.log('result ', result.length);
        reslove(result.length)
      })  
    })
  },
  getAllUserToImport(data){
    return new Promise((reslove, reject) => {
      let _data = data.body;
      userModel.findAll({
        where: {
          'id' :{
            [Op.ne] : data.user_id
          }
        },
        'order': [
          ['id', 'DESC']
        ],
        raw: true
      }).then((res) => {
        console.log('res', res);
        reslove(res);
      })
    })
  },
  // 登录
  login(data){
    return new Promise((reslove, reject)=>{
      let _data = data.body;
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
            }else{
              user.avatar = Buffer.from(user.avatar).toString('base64');
            }
            let data = {
              code: 200,
              role_id: user.role_id,
              avatar: user.avatar,
              id: res.id
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
  },

  //修改用户权限 todo
  updateRole(data){
    return new Promise((reslove)=>{
      userModel.findOne({where:{username: data.username}}).then((res)=>{
        if(res === null){
          reslove({code:201})
        }else{
          userModel.update({role_id: data.role_id}, {where: {username: data.username}}).then((res)=>{
              reslove(res);
          })
        }
      })
    })
},
      // roleModel.update({role_id: data.role_id}, {where: {username: data.username}}).then((res)=>{
      //   reslove(res);
      // })
  
  //获取角色
  getRole(){
    return new Promise((reslove)=>{
      roleModel.findAll({raw: true}).then((res)=>{
        reslove(res);
      })
    })
  },
  setRole(data){
    return new Promise((reslove)=>{
      userModel.update({role_id: data.role_id},{
        where: {
          id: data.id
        }
      }).then((res)=>{
        reslove(res);
      })
    })
  },

  //更新个人信息
  updateUserInfo(data){
    return new Promise((reslove, reject)=>{
      userModel.update({username: data.username, avatar: data.avatar, password: data.password},{
        where: {
          id: data.id
        }
      }).then((res)=>{
        reslove(res);
      })
    })
  }
}

module.exports = userDao