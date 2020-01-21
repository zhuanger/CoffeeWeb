let goodsModel = require(__model + 'goodsModel.js')
let goodtypesModel = require(__model + 'goodtypesModel.js')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let goodDao = {
    //增加一件饮品
    CreateGood(data){
      return new Promise((reslove, reject)=>{
        goodsModel.create(data).then((res)=>{
          reslove(res)
        })
      })
    },
    // 删除一件饮品
    DeleteGood(res){
        return new Promise((reslove, reject)=>{
            goodsModel.destroy({where:{id:res.good_id}}).then((result)=>{
                reslove(result)
            })
        })
    },
    // 更新一件饮品
    UpdateGood(data){
        return new Promise((reslove, reject)=>{
            goodsModel.update(data,{where: {id: data.id}}).then((res)=>{
                reslove(res)
            })
        })
    },
    //查询所有咖啡
    selectall(data){
      return new Promise((reslove, reject)=>{
        var num = data.body.page
        goodsModel.findAll({
            limit: 5,
            offset: 5*(num-1),
            'order': [
                ['id', 'DESC']
            ]
        }).then((res)=>{
            var result = {}
            result['pageinfo'] = res;
            goodsModel.findAndCountAll().then((res)=>{
                var pagenum = Math.ceil(res['count'] / 5);
                result['pageinfo'].forEach(element => {
                  if(element.dataValues.image){
                    element.dataValues.image = Buffer.from(element.dataValues.image).toString('base64');
                  }
                });
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
        let num = Number(data.num) || 5;
        goodsModel.findAll({where: {good_types_id: data.good_types_id}
        ,limit: num,
        offset: num*(page-1)
      }).then((res)=>{
          let result = {};
          res.forEach((item)=>{
            item.dataValues.image = Buffer.from(item.dataValues.image).toString('base64');
          })
          result['pageinfo'] = res;
          goodsModel.findAndCountAll({where: {good_types_id: data.good_types_id}}).then((resAll)=>{
            result['pagenum'] = Math.ceil(resAll['count'] / num);
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
    selectnew(data){
        return new Promise ((reslove, reject)=>{
            var num = data.page || 1;
            var pageSize =  Number(data.pageSize) || 5;
            goodsModel.findAll({
                'order': [
                    ['add_date', 'DESC']
                ],
                limit: pageSize,
                offset: pageSize*(num-1),
            }).then((res)=>{
                var result = {}
                result['newinfo'] = res;
                res.forEach((item)=>{
                  item.dataValues.image = Buffer.from(item.dataValues.image).toString('base64');
                })
                goodsModel.findAndCountAll().then((res)=>{
                    result['count'] = res.count
                    result['pagenum'] = Math.ceil(res['count'] / 5)
                    reslove(result)
                })
            })
        })
    },
    // 最热的饮品，以卖出的饮品数量来排序，降序
    selecthot(data){
        return new Promise ((reslove, reject)=>{
            var num = data.page || 1;
            var pageSize =  Number(data.pageSize) || 5;
            goodsModel.findAll({
                'order': [
                    ['sell_num', 'DESC']
                ],
                limit: pageSize,
                offset: pageSize * (num-1),
            }).then((res)=>{
                var result = {};
                res.forEach((item)=>{
                  item.dataValues.image = Buffer.from(item.dataValues.image).toString('base64');
                })
                result['hotinfo'] = res;
                goodsModel.findAndCountAll().then((res)=>{
                    // result['count'] = res.count
                    result['pagenum'] = Math.ceil(res['count'] / pageSize)
                    reslove(result)
                })
            })
        })
    },
    // 模糊查询饮品
    SelectGoodByVague(res){
        return new Promise ((reslove, reject)=>{
            var product = res.body.product
            var num = res.body.num || 1;
            var pageSize =  Number(res.body.pageSize) || 5;
            goodsModel.findAll({
                where: {
                    product: {
                        [Op.like]:'%' +product + '%'
                    }
                },
                limit: pageSize,
                offset: pageSize * (num-1),
            }).then((res)=>{
                var result = {};
                res.forEach((item)=>{
                  item.dataValues.image = Buffer.from(item.dataValues.image).toString('base64');
                })
                result['info'] = res;
                goodsModel.findAndCountAll({
                    where: {
                        product: {
                            [Op.like]:'%' +product + '%'
                        }
                    }
                }).then((res)=>{
                    result['count'] = res.count
                    result['pagenum'] = Math.ceil(res['count'] / 5)
                    reslove(result)
                })
            })
        })
    }
}
module.exports = goodDao