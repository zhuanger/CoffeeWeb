let goodsModel = require(__model + 'goodsModel.js')

let goodDao = {
    query(res){
        return new Promise((reslove, reject)=>{
            //增加一个用户，注册
            console.log('enter dao 1')
            console.log(res.query.id)
            goodsModel.findOne({id: res.query.id}).then((res)=>{
              console.log('step five',res)
              reslove(res)
            })
        })
    }
}
module.exports = goodDao