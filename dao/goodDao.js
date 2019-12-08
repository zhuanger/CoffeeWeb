let goodsModel = require(__model + 'goodsModel.js')

let goodDao = {
    CreateGood(res){
        return new Promise((reslove, reject)=>{
            //增加一件商品
            goodsModel.create(res.params).then((res)=>{
              console.log('step five',res)
              reslove(res)
            })
        })
    },
    //查询所有咖啡
    selectall(){
        return new Promise((reslove, reject)=>{
            goodsModel.findAll().then((res)=>{
                reslove(res)
            })
        })
    },
    //通过咖啡id查询咖啡的详细信息
    selectone(res){
        return new Promise ((reslove, reject)=>{
            goodsModel.findOne({id: res.query.id}).then((result)=>{
                reslove(result)
            })
        })
    }
}
module.exports = goodDao