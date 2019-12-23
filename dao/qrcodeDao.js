let qrcodeModel = require(__model + 'qrcodeModel.js')

let qrcodeDao = {
    create(res){
        return new Promise((reslove, reject)=>{
            qrcodeModel.create(res.body).then((res)=>{
                reslove(res)
            })
        })
    },
    select(){
        return new Promise((reslove, reject)=>{
            qrcodeModel.findAll().then((res)=>{
                reslove(res)
            })
        })
    }
}
module.exports = qrcodeDao