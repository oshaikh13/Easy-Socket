
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var easySocket = require('./easySocket.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

server.listen(8080);
// var otherIO = require('socket.io')(server);
//ocket = easySocket(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// otherIO.on('connection', function(socket){
//   console.log(socket);
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

easySocket(server).then(function(socket){

  socket.listenTo('updateTextArea', function(){
    console.log('trigger-server')
    socket.sendAll('updateTextArea');
  })

});



