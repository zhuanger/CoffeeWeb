module.exports = function(app){
  // 异步app.get 和app.post 
  var ajax = {
    send(type, url){
      return new Promise((resolve, reject)=>{
        app[type](url, function(req,res,next){
          if(res){
            if(type === 'get'){
              resolve({
                query: req.query,
                response: res,
                next: next
              })
            }else if(type === 'post'){
              resolve({
                params: req.body,
                response: res,
                next: next
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