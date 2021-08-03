"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // settings

app.set("port", process.env.PORT || 3000); // static files

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public"))); // starting the server

var _default = app;
exports["default"] = _default;