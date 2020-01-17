let qrcodeDao = require('../dao/qrcodeDao')

const qrcodeService = {
    async qrcodeUpdate(res){
      let result = await qrcodeDao.update(res.body);
      return result
    },
    async getQrCode(){
      let result = await qrcodeDao.getQrCode();
      result[0].dataValues.image = Buffer.from(result[0].dataValues.image).toString('base64');
      return result
    }
}
module.exports = qrcodeService