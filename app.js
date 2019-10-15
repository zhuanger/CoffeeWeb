var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var ajax = require('./utils/ajax');
var app = express();


global.Promise  = require("bluebird");
// const mysql = require('mysql');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
global.$ajax = ajax(app)

global.__routes = `${__dirname}\\routes\\` ;
global.__utils = `${__dirname}\\utils\\` 
global.__services = `${__dirname}\\services\\` 
global.__dao = `${__dirname}\\dao\\` 

const db = require(__utils + 'dataBase.js')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
var routes = require('./routes/admin')
routes(app)

app.use(bodyParser.urlencoded({
  extended: false
})); 
app.use(bodyParser.json()); // for parsing application/json
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
