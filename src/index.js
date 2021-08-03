import app from "./app";
import "./database";
import http from "http";
import socketio from "socket.io";
import sockets from "./sockets";

const server = http.createServer(app);
const io = socketio(server);

sockets(io);

server.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);
