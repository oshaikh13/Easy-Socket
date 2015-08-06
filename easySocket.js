var IO = require('socket.io');
var Promise = require("bluebird");

module.exports = function (server) {

  var newIOServer = IO(server);

  var getConnection = (function() {
    return new Promise(function(resolve){
      newIOServer.on('connection', function(socket){
        resolve(socket);
      })
    })
  })();

  return getConnection.then(function(data){
    return {
      socket: data,
      sendAll: function(event, obj){
        this.socket.emit(event, obj);
      },

      listenTo: function(event, func){
        this.socket.on(event, func);
      } 
    } 
  });

}