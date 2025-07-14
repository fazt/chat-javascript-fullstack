import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("connected to db:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
