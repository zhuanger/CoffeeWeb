let userModel = require(__model + 'userModel.js')

let userDao = {
  query(){
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
      userModel.findAll({raw: true}).then((res)=>{
        //[ { name: '小李', userId: 1000 }, { name: '小林', userId: 1001 } ]
        console.log('step four', res)
        reslove(res)
        // return res
      })
    })
  }
}

module.exports = userDao