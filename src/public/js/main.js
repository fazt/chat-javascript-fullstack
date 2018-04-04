$(function () {

    // socket.io client side connection
    const socket = io.connect();

    // obtaining DOM elements from the HTML Interface
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    // events
    $messageForm.submit( e => {
      e.preventDefault();
      socket.emit('send message', $messageBox.val());
      $messageBox.val('');
    });

    socket.on('new message', data => {
      $chat.append(data + '<br/>');
    });
});
