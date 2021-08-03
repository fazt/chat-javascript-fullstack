import { Schema, model } from "mongoose";

const ChatSchema = new Schema({
  nick: String,
  msg: String,
  created: { type: Date, default: Date.now },
});

export default model("Chat", ChatSchema);
