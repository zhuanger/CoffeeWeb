let goodDao = require('../dao/goodDao')

const goodService = {
    async CreateGood(res){
        let result = await goodDao.CreateGood(res)
        return result
    },
    async getAllGoods(){
        let result = await goodDao.selectall()
        return result
    }
}
module.exports = goodService