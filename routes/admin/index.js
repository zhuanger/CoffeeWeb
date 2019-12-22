module.exports = function (app) {
  require('./user/login')(app)
  require('./user/addUser')(app)
  // require('./user/goods')(app)
  // require('./user/order')(app)
}