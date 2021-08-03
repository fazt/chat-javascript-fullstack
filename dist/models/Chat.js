"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ChatSchema = new _mongoose.Schema({
  nick: String,
  msg: String,
  created: {
    type: Date,
    "default": Date.now
  }
});

var _default = (0, _mongoose.model)("Chat", ChatSchema);

exports["default"] = _default;