import express from "express";
import path from "path";

const app = express();

// static files
app.use(express.static(path.join(import.meta.dirname, "../public")));

// starting the server
export default app;
