let goodsModel = require(__model + 'goodsModel.js')
let goodtypesModel = require(__model + 'goodtypesModel.js')

let goodDao = {
    CreateGood(res){
      return new Promise((reslove, reject)=>{
          //增加一件商品
        goodsModel.create(res.body).then((res)=>{
          reslove(res)
        })
      })
    },
    //查询所有咖啡
    selectall(res){
      return new Promise((reslove, reject)=>{
        var num = res.params.num
        goodsModel.findAll({limit: 5,offset: 5*(num-1)}).then((res)=>{
          reslove(res);
        })
      })
    },
    //通过咖啡id查询咖啡的详细信息
    selectone(res){
        return new Promise ((reslove, reject)=>{
            console.log(res.params.id)
            goodsModel.findOne({where: {id: res.params.id}}).then((result)=>{
                reslove(result)
            })
        })
    },
    //饮品分类查询,通过id
    selecttypeinfo(res){
        return new Promise ((reslove, reject)=>{
            goodsModel.findAll({where: {good_types_id: res.params.good_types_id}}).then((result)=>{
                reslove(result)
            })
        })
    },
    // 获取所有饮品分类
    selecttype(res){
        return new Promise ((reslove, reject)=>{
            goodtypesModel.findAll().then((result)=>{
                reslove(result)
            })
        })
    },
    createType(res){
        return new Promise ((reslove, reject)=>{
            console.log(res.body)
            goodtypesModel.create(res.body).then((result)=>{
                reslove(result)
            })
        })
    },
    // 查询最新的饮品
    selectnew(){
        return new Promise ((reslove, reject)=>{
            goodsModel.findAll({
                'order': [
                    ['add_date', 'DESC']
                ],
                limit: 5
            }).then((res)=>{
                reslove(res)
            })
        })
    },
    // 最热的饮品，以卖出的饮品数量来排序，降序
    selecthot(){
        return new Promise ((reslove, reject)=>{
            goodsModel.findAll({
                'order': [
                    ['sell_num', 'DESC']
                ],
                limit: 5
            }).then((res)=>{
                reslove(res)
            })
        })
    }
}
module.exports = goodDao