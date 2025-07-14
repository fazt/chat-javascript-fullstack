import app from "./app.js";
import "./database.js";
import http from "http";
import { Server } from "socket.io";
import sockets from "./sockets.js";
import { PORT } from "./config.js";

const server = http.createServer(app);
const io = new Server(server);

sockets(io);

server.listen(PORT);
console.log(`server on port ${PORT}`);
