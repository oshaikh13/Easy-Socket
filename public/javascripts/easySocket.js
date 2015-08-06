// Create an easy io obj.... For obj decleration
var easyio = {
  url: null,
  // Returns an io connection (provided by socket io) and attaches helpers
  connect: function(){
    return {
      ioConnection: io.connect(this.url), //Socket io creates this io obj... We are using it.

      // These helpers fallback to socket io. For now
      listenTo: function(event, func){
        this.ioConnection.on(event, func);
      },


      trigger: function(event, data) {
        if (Array.isArray(event)){
          for (var i = 0; i < event; i++){
            this.trigger(event[i]);
          }
        } else {
          console.log(event);
          this.ioConnection.emit(event, data);
        }
        
      }
    }
  }
}