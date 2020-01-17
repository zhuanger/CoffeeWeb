let goodDao = require('../dao/goodDao')

const goodService = {
    // 创建一杯信息的饮品
    async CreateGood(data){
      let _data = data.body;
      _data.sell_num = 0;
      let result = await goodDao.CreateGood(_data);
      return result
    },
    async DeleteGood(res){
        let result = await goodDao.DeleteGood(res)
        return result
    },
    // 获取所有饮品的信息
    async getAllGoods(res){
        let result = await goodDao.selectall(res)
        return result
    },
    // 根据id获取一件饮品的信息
    async SelectOneGood(res){
        let result = await goodDao.selectone(res)
        return result
    },
    // 查询所有饮品类别
    async SelectGoodType(res){
        let result = await goodDao.selecttype(res)
        return result
    },
    // 通过类型id查询分类的饮品
    async SelectGoodTypeInfo(res){
        let result = await goodDao.selecttypeinfo(res)
        return result
    },
    // 查询最新的饮品
    async SelectNewGoods(res){
        let result = await goodDao.selectnew(res.body);
        return result
    },
    // 查询最热的饮品
    async SelectHotGoods(res){
        let result = await goodDao.selecthot(res.body);
        return result
    },
    // 新建分类
    async CreateType(res){
        let result = await goodDao.createType(res)
        return result
    },
    async SelectGoodByVague(res){
        let result = await goodDao.SelectGoodByVague(res)
        return result
    },
    async updateGood(res){
      let result = await goodDao.UpdateGood(res.body)
      return result
  },

}
module.exports = goodService