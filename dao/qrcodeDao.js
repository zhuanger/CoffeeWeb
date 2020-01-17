let qrcodeModel = require(__model + 'qrcodeModel.js')

let qrcodeDao = {
    update(data){
      return new Promise((reslove, reject)=>{
        qrcodeModel.update({image: data.image}, {where: {id: data.id}}).then((res)=>{
          reslove(res);
        })
      })
    },
    getQrCode(){
      return new Promise((reslove, reject)=>{
        qrcodeModel.findAll().then((res)=>{
          reslove(res);
        })
      })
    }
}
module.exports = qrcodeDao