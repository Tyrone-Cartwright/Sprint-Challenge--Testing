const express = require("express");
// const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.post("/games", (req, res) => {
  if (!req.body.title || !req.body.genre || !req.body.releaseYear) {
    return res.status(422).json();
  } else {
    req.body.id = games[games.length - 1].id + 1;
    return res.status(201).json(req.body);
  }
});

server.get("/games", (req, res) => {
  return res.status(200).json(games);
});

module.exports = server;
