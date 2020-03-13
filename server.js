const express = require('express');
const path = require('path');
const session = require('express-session');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser')

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(session({ secret: 'zartzart' , resave: false , saveUninitialized: true }));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });