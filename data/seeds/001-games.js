exports.seed = function(knex, Promise) {
  return knex("games").insert([
    { title: "World of Warcraft", genre: "war", releaseYear: "2004" },
    { title: "Cards against Humanity", genre: "social", releaseYear: "2014" },
    { title: "Trivia Crack", genre: "trivia", releaseYear: "2014" }
  ]);
};
