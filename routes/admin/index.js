module.exports = function (app) {
  require('./user/login')(app)
  require('./user/addUser')(app)
  require('./goods/createGood')(app)
  // require('./user/order')(app)
}