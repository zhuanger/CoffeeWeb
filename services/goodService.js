let goodDao = require('../dao/goodDao')

const goodService = {
    async getGoodInfo(res){
        console.log('enter service 1')
        let result = await goodDao.query(res)
        console.log('return service 1')
        return result
    }
}
module.exports = goodService