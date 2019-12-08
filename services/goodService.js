let goodDao = require('../dao/goodDao')

const goodService = {
    // 创建一杯信息的饮品
    async CreateGood(res){
        let result = await goodDao.CreateGood(res)
        return result
    },
    // 获取所有饮品的信息
    async getAllGoods(){
        let result = await goodDao.selectall()
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
    }
}
module.exports = goodService