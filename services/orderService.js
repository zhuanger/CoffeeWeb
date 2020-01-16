let orderDao = require('../dao/orderDao');
let qrcodeService = require(__services + 'qrcodeService');

const orderService = {
    async orderProduce(res){
      let date = new Date();
      let over_time = new Date(date.valueOf() + 30 * 60 * 1000).toLocaleString();
      res.create_time = date.toLocaleString();
      res.overtime = over_time;
      let result = await orderDao.create(res);
      // 创建完后 去数据库拿二维码
      let qrcode = await qrcodeService.getQrCode();
      result.dataValues.balanceImage = qrcode[0].dataValues.image;
      return result;
    },
    async orderSelect(){
        let result = await orderDao.select()
        return result
    },
    async SelectUserGoods(res){
        let result = await orderDao.selectUserOrder(res)
        return result
    },
    async UpdatePayStatus(res){
        let result = await orderDao.UpdatePayStatus(res)
        return result
    }
    // async uploadQRcode(res){
    //     let result = await qrcodeDao.Create(res)
    //     return result
    // },
    // async selectQRcode(){
    //     let result = await qrcodeDao.Select()
    //     return result
    // }
}
module.exports = orderService