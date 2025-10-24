import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

// import router
import definitionRouter from "./routes/definition.route.js";
// route definition
app.use("/api/v1/definition", definitionRouter);

export { app };
