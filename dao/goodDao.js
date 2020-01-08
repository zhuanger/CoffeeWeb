let goodsModel = require(__model + 'goodsModel.js')
let goodtypesModel = require(__model + 'goodtypesModel.js')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let goodDao = {
    //增加一件饮品
    CreateGood(res){
      return new Promise((reslove, reject)=>{
          //增加一件商品
        goodsModel.create(data).then((res)=>{
          reslove(res)
        })
      })
    },
    // 删除一件饮品
    DeleteGood(res){
        return new Promise((reslove, reject)=>{
            console.log(res.good_id)
            goodsModel.destroy({where:{id:res.good_id}}).then((result)=>{
                reslove(result)
            })
        })
    },
    // 更新一件饮品
    UpdateGood(data){
        return new Promise((reslove, reject)=>{
            goodsModel.update(data).then((res)=>{
                reslove(res)
            })
        })
    },
    //查询所有咖啡
    selectall(res){
      return new Promise((reslove, reject)=>{
        var num = res.body.page
        goodsModel.findAll({
            limit: 5,
            offset: 5*(num-1),
            'order': [
                ['id', 'DESC']
            ]
        }).then((res)=>{
            var result = {}
            result['pageinfo'] = res
            goodsModel.findAndCountAll().then((res)=>{
                var pagenum = Math.ceil(res['count'] / 5)
                result['pagenum'] = pagenum
                reslove(result);
            })
        })
      })
    },
    //通过咖啡id查询咖啡的详细信息
    selectone(res){
        return new Promise ((reslove, reject)=>{
            goodsModel.findOne({where: {id: res.params.id}}).then((result)=>{
                reslove(result)
            })
        })
    },
    //饮品分类查询,通过id
    selecttypeinfo(data){
      return new Promise ((reslove, reject)=>{
        let page = data.page || 1;
        goodsModel.findAll({where: {good_types_id: data.good_types_id}
        ,limit: 5,
        offset: 5*(page-1)
      }).then((res)=>{
          let result = {}
          result['pageinfo'] = res;
          goodsModel.findAndCountAll().then((resAll)=>{
            result['pagenum'] = Math.ceil(resAll['count'] / 5);
            reslove(result);
          })         
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
    // 新建分类类型
    createType(res){
        return new Promise ((reslove, reject)=>{
            goodtypesModel.create(res.body).then((result)=>{
                reslove(result)
            })
        })
    },
    // 查询最新的饮品
    selectnew(res){
        return new Promise ((reslove, reject)=>{
            var num = res.params.num
            goodsModel.findAll({
                'order': [
                    ['add_date', 'DESC']
                ],
                limit: 5,
                offset: 5*(num-1),
            }).then((res)=>{
                var result = {}
                result['newinfo'] = res
                goodsModel.findAndCountAll().then((res)=>{
                    result['count'] = res.count
                    result['pagenum'] = Math.ceil(res['count'] / 5)
                    reslove(result)
                })
            })
        })
    },
    // 最热的饮品，以卖出的饮品数量来排序，降序
    selecthot(res){
        return new Promise ((reslove, reject)=>{
            var num = res.params.num
            goodsModel.findAll({
                'order': [
                    ['sell_num', 'DESC']
                ],
                limit: 5,
                offset: 5*(num-1),
            }).then((res)=>{
                var result = {}
                result['hotinfo'] = res
                goodsModel.findAndCountAll().then((res)=>{
                    result['count'] = res.count
                    result['pagenum'] = Math.ceil(res['count'] / 5)
                    reslove(result)
                })
            })
        })
    },
    // 模糊查询饮品
    SelectGoodByVague(res){
        return new Promise ((reslove, reject)=>{
            var product = res.body.product
            goodsModel.findAll({
                where: {
                    product: {
                        [Op.like]:'%' +product + '%'
                    }
                }
            }).then((res)=>{
                reslove(res)
            })
        })
    }
}
module.exports = goodDao