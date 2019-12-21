let qrcodeDao = require('../dao/qrcodeDao')

const qrcodeService = {
    async qrcodeCreate(res){
        let result = await qrcodeDao.create(res)
        return result
    },
    async qrcodeSelect(){
        let result = await qrcodeDao.select()
        return result
    }
}
module.exports = qrcodeService