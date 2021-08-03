"use strict";

$(function () {
  // socket.io client side connection
  var socket = io.connect(); // obtaining DOM elements from the Chat Interface

  var $messageForm = $("#message-form");
  var $messageBox = $("#message");
  var $chat = $("#chat"); // obtaining DOM elements from the NicknameForm Interface

  var $nickForm = $("#nickForm");
  var $nickError = $("#nickError");
  var $nickname = $("#nickname"); // obtaining the usernames container DOM

  var $users = $("#usernames");
  $nickForm.submit(function (e) {
    e.preventDefault();
    socket.emit("new user", $nickname.val(), function (data) {
      if (data) {
        $("#nickWrap").hide(); // $('#contentWrap').show();

        document.querySelector("#contentWrap").style.display = "flex";
        $("#message").focus();
      } else {
        $nickError.html("\n            <div class=\"alert alert-danger\">\n              That username already Exists.\n            </div>\n          ");
      }
    });
    $nickname.val("");
  }); // events

  $messageForm.submit(function (e) {
    e.preventDefault();
    socket.emit("send message", $messageBox.val(), function (data) {
      $chat.append("<p class=\"error\">".concat(data, "</p>"));
    });
    $messageBox.val("");
  });
  socket.on("new message", function (data) {
    displayMsg(data);
  });
  socket.on("usernames", function (data) {
    var html = "";

    for (i = 0; i < data.length; i++) {
      html += "<p><i class=\"fas fa-user\"></i> ".concat(data[i], "</p>");
    }

    $users.html(html);
  });
  socket.on("whisper", function (data) {
    $chat.append("<p class=\"whisper\"><b>".concat(data.nick, "</b>: ").concat(data.msg, "</p>"));
  });
  socket.on("load old msgs", function (msgs) {
    for (var _i = msgs.length - 1; _i >= 0; _i--) {
      displayMsg(msgs[_i]);
    }
  });

  function displayMsg(data) {
    $chat.append("<p class=\"p-2 bg-secondary w-75 animate__animated animate__backInUp\"><b>".concat(data.nick, "</b>: ").concat(data.msg, "</p>"));
    var chat = document.querySelector("#chat");
    chat.scrollTop = chat.scrollHeight;
  }
});