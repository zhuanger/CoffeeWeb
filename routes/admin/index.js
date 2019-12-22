module.exports = function (app) {
  require('./user/login')(app)
  require('./user/register')(app)
  require('./user/goods')(app)
  require('./user/order')(app)
}