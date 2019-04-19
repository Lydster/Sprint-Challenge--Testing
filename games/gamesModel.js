const db = require("../data/dbConfig.js");
module.exports = {
  getAll,
  insert,
  getById
};

function getAll() {
  return db("games");
}

async function insert(game) {
  const [id] = await db("games").insert(game);
  return db("games")
    .where({ id })
    .first();
}

function getById(id) {
  return db("games").where("id", id);
}
