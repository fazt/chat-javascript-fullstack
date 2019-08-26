const app = require('./app');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio.listen(server);
require('./sockets')(io);
require('./database');

async function main() {
  await server.listen(app.get('port'));
  console.log(`server on port ${app.get('port')}`);
}

main();