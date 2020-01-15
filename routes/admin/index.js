module.exports = function (app) {
  require('./user/login')(app);
  require('./user/addUser')(app);
  require('./user/getAllUser')(app);
  require('./user/deleteUser')(app);
  require('./user/getRole')(app);
  require('./user/setRole')(app);
  require('./user/updateUserInfo')(app);
  require('./user/updateRole')(app);
  require('./goods/createGood')(app);
  require('./goods/deleteGood')(app);
  require('./goods/createType')(app);
  require('./goods/gatherGoodType')(app);
  require('./goods/getAllGood')(app);
  require('./goods/getGoodById')(app);
  require('./goods/selectGoodType')(app);
  require('./goods/selectHotGoods')(app);
  require('./goods/selectNewGoods')(app);
  require('./goods/selectGoodByVague')(app);
  require('./order/order')(app);
  require('./order/qrcode')(app);
  require('./order/selectUserGoods')(app);
  require('./order/updatePayStatus')(app);
}