module.exports = function(app){
  // 异步app.get 和app.post 
  var ajax = {
    send(type, url){
      return new Promise((resolve, reject)=>{
        app[type](url, function(req,res,next){
          console.log('next: ', next)
          if(res){
            if(type === 'get'){
              resolve({
                query: req.query,
                response: res,
                next: next
              })
            }else if(type === 'post'){
              resolve({
                params: JSON.parse(req.body.data),
                res: res
              })
            }
          }else{
            //todo
            reject('error')
          }
        })
      })
    },
    get(url){
      return this.send('get', url)
    },
    post(url){
      return this.send('post', url)
    }
  }
  return ajax
}