// Create an easy io obj.... For obj decleration
var easyio = {

  // Returns an io connection (provided by socket io) and attaches helpers
  connect: function(url){
    return {

      ioConnection: io.connect(url), //Socket io creates this io obj... We are using it.

      // These helpers fallback to socket io. For now
      on: function(event, func){
        this.ioConnection.on(event, func);
      },


      emit: function(event, data) {
        this.ioConnection.emit(event, data);
      }
    }
  }
}