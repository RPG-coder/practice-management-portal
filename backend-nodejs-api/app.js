var path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var express = require('express');
var cors = require('cors');
var logger = require('morgan');
var {appLogger, errorLogger} = require('./logs/logger');

/* --- Application configurations --- */
var app = express();

try{
  appLogger.info("[STARTED]: Running Patient Finder Backend Application");

  /* --- Route Settings --- */
  var pmRouter = require('./routes/practice_management');
  var indexRouter = require('./routes/index');


  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(cors())

  /* --- Route Handlers --- */
  app.use('/', pmRouter);
  app.use('/', indexRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
}catch(err){
  console.log(err);
  errorLogger.error(err);
}

module.exports = app;
