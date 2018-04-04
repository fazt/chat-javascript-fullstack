module.exports = io => {
  
  io.sockets.on('connection', socket => {

    // receive a message a broadcasting
    socket.on('send message', data => {
      io.sockets.emit('new message', data);
    });

  });

}
