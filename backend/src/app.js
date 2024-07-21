import express from "express";
import morgan from "morgan";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) =>{
  res.send("Welcome to notecode backend")
});

// 404
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;