const db = require("../data/dbConfig");
const gamesdb = require("../games/gamesModel.js");
const server = require("./server");
const request = require("supertest");

describe("games model", () => {
  describe("insert", () => {
    afterEach(async () => {
      await db("games").truncate();
    });
    it("should insert new game in db", async () => {
      await gamesdb.insert({
        title: "Sims",
        genre: "lame",
        releaseYear: "1998"
      });
      const gamesVar = await db("games");
      expect(gamesVar).toHaveLength(1);
    });
    it("should insert the provided game into db", async () => {
      let game = await gamesdb.insert({
        title: "Bopit",
        genre: "lame",
        releaseYear: "1992"
      });
      expect(game.title).toBe("Bopit");
      expect(game.genre).toBe("lame");
      expect(game.releaseYear).toBe("1992");
    });
    it("should have res.status 200", () => {
      return request(server)
        .post("/games")
        .then(res => {
          expect(res.status).toBe(422);
        });
    });
  });
  describe("get request", () => {
    it("should have status 200", () => {
      return request(server)
        .get("/games")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return type json", () => {
      return request(server)
        .get("/games")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
    it("should return two games", () => {
      return request(server)
        .get("/games")
        .then(res => {
          expect(res.text).toHaveLength(2);
        });
    });
  });
});
