const express = require("express");

const app = express();

app.use("/api/threads", require("./routes/threads"));

module.exports = app;
