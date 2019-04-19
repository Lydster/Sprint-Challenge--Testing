const express = require("express");
const server = express();
server.use(express.json());

const { getAll, insert } = require("../games/gamesModel");

server.get("/", async (req, res) => {
  res.status(200).json({ message: "here it is running" });
});

server.get("/games", async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  getAll()
    .then(game => {
      res.status(200).json(game);
    })
    .catch(error => {
      res.status(500).json({ error: "Could not retrieve game data." });
    });
});

server.post("/games", (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if (!title || !genre || !releaseYear) {
    res
      .status(422)
      .json({ error: "please provide a title, genre, and release year" });
  } else {
    insert({ title, genre, releaseYear })
      .then(game => {
        res.status(200).json(game);
      })
      .catch(error => {
        res.status(500).json({ error: "could not insert new game" });
      });
  }
});

module.exports = server;
