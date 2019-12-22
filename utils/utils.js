module.exports = utils = {
  transformData(data){
    let paramsArray = [];
    for(let key in data){
      paramsArray.push(JSON.parse(key));
    }
    return paramsArray[0];
  }
}