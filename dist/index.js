"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _sockets = _interopRequireDefault(require("./sockets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = _http["default"].createServer(_app["default"]);

var io = (0, _socket["default"])(server);
(0, _sockets["default"])(io);
server.listen(_app["default"].get("port"));
console.log("server on port ".concat(_app["default"].get("port")));