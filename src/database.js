import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
