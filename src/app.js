import express from "express";
import path from "path";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;
