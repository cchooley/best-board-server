require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

const auth = require('./routes/auth')
const votes = require('./routes/votes')
const users = require('./routes/users')
const activities = require('./routes/activities')
const stripe = require('./routes/stripe')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(require("body-parser").text());
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'BestBoard database'
  })
})

app.use('/users', users)
app.use('/votes', votes)
app.use('/auth', auth)
app.use('/activities', activities)
app.use('/stripe', stripe)

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

module.exports = app;
