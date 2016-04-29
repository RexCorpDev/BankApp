'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.us('/api', require('./routes/api'));
// app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server is listening on PORT ${PORT}`);
});
