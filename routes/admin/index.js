module.exports = function (app) {
  require('./user/user')(app)
  require('./user/register')(app)
  require('./user/goods')(app)
  require('./user/order')(app)
}