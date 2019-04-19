const express = require("express");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ message: "here it is running" });
});

module.exports = server;
