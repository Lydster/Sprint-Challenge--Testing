const express = require("express");
const server = express();
server.use(express.json());

const { getAll, insert } = require("../games/gamesModel");

server.get("/", async (req, res) => {
  res.status(200).json({ message: "here it is running" });
});

server.get("/games", async (req, res) => {
  getAll()
    .then(game => {
      res.status(200).json(game);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not retrieve game data." });
    });
});

module.exports = server;
