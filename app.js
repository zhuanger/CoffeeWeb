var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
// import {transformData} from "./utils/utils.js"
var utils = require("./utils/utils.js");
var app = express();


app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({
  extended: true 
})); 
global.Promise  = require("bluebird");
// const mysql = require('mysql');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

global.__routes = `${__dirname}\\routes\\` ;
global.__utils = `${__dirname}\\utils\\` 
global.__services = `${__dirname}\\services\\` 
global.__dao = `${__dirname}\\dao\\` 
global.__model = `${__dirname}\\models\\` 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


global.$transformData = utils.transformData;
global.$constant = utils.constant;


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
var routes = require('./routes/admin')
routes(app);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
});

module.exports = app;
