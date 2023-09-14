import express from "express";
import cors from "cors";

import threadsRouter from "./routes/threads-router";

const PORT = 8080;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:8080"],
  }),
);

app.use("/api", threadsRouter);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
