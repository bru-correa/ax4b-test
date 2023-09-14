import express from "express";

const threadsRouter = express.Router();

threadsRouter.get("/threads/:id", (req, res) => {
  const id: number = +req.params.id;
  res.send(`Sending thread ${id}`);
});

export default threadsRouter;
