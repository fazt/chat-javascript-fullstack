import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost/chat");
    console.log("connected to db:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
