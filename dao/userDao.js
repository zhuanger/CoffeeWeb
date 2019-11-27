let userModel = require(__model + 'userModel.js')
let roleModel = require(__model + 'roleModel.js')

let userDao = {
  addUser(res){
    /**
     * 因为Sequelize的全部方法全部异步的，所以用Promise来处理异步
     * userService 用asyn/await来处理异步操作，让异步变为同步
     * promise 最好和 asyn/await一起用
     * 
     * 意思就是：当执行userModel.findAll()方法之后，不会立刻执行then这个方法
     *          而是回到userService往下执行，然后等这个进程执行完了，再执行then里面的方法
     * 
     *  控制台输出顺序（如果不用Promise）
     *    userService的step one > userService的step two > user.js的step three > 最后到then的step four
     * 
     *  如果用Promise 和async/await
     *    step one > step four > step two >step three
     */
    return new Promise((reslove, reject)=>{
      //增加一个用户，注册
      userModel.create(res.params).then((res)=>{
        // roleModel.create({name: 'worker',describe: '工作人员'})]
          console.log('step five',res)
          var role = roleModel.build({name: 'worker', describe: '工作人员'})
          userModel.setroleModel(role)
          reslove(res)
      })
    })
  },
  query(){
    return new Promise((reslove, reject)=>{
      //查询所有用户
      console.log('enter dao')
      userModel.findAll().then((res)=>{
        console.log('return service',res)
        reslove(res)
      })
    })
  },
  select(res){
    return new Promise((reslove, reject)=>{
      //
      userModel.findOne({
        where: {username:res.params.username,password:res.params.password},
      }).then((res)=>{
        console.log('return service',res)
        reslove(res)
      })
    })
  }
}

module.exports = userDao