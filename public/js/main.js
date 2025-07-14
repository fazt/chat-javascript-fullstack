$(function () {
  // socket.io client side connection
  const socket = io.connect();

  // obtaining DOM elements from the Chat Interface
  const $messageForm = $("#message-form");
  const $messageBox = $("#message");
  const $chat = $("#chat");

  // obtaining DOM elements from the NicknameForm Interface
  const $nickForm = $("#nickForm");
  const $nickError = $("#nickError");
  const $nickname = $("#nickname");

  // obtaining the usernames container DOM
  const $users = $("#usernames");

  $nickForm.submit((e) => {
    e.preventDefault();
    socket.emit("new user", $nickname.val(), (data) => {
      if (data) {
        $("#nickWrap").hide();
        // $('#contentWrap').show();
        document.querySelector("#contentWrap").style.display = "flex";
        $("#message").focus();
      } else {
        $nickError.html(`
            <div class="alert alert-danger">
              That username already Exists.
            </div>
          `);
      }
    });
    $nickname.val("");
  });

  // events
  $messageForm.submit((e) => {
    e.preventDefault();
    socket.emit("send message", $messageBox.val(), (data) => {
      $chat.append(`<p class="error">${data}</p>`);
    });
    $messageBox.val("");
  });

  socket.on("new message", (data) => {
    displayMsg(data);
  });

  socket.on("usernames", (data) => {
    let html = "";
    for (i = 0; i < data.length; i++) {
      html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`;
    }
    $users.html(html);
  });

  socket.on("whisper", (data) => {
    $chat.append(`<p class="whisper"><b>${data.nick}</b>: ${data.msg}</p>`);
  });

  socket.on("load old msgs", (msgs) => {
    for (let i = msgs.length - 1; i >= 0; i--) {
      displayMsg(msgs[i]);
    }
  });

  function displayMsg(data) {
    $chat.append(
      `<p class="p-2 bg-secondary w-75 animate__animated animate__backInUp"><b>${data.nick}</b>: ${data.msg}</p>`
    );
    const chat = document.querySelector("#chat");
    chat.scrollTop = chat.scrollHeight;
  }
});
