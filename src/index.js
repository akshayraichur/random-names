const names = require("./names.json");
const middleNames = require("./middle-names.json");
const places = require("./places.json");
const starWars = require("./starwars-names.json");
const uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: names,
  random: uniqueRandomArray(names),
  randomPlaces: uniqueRandomArray(places),
  randomMiddleNames: uniqueRandomArray(middleNames),
  randomStarWarsname: uniqueRandomArray(starWars),
};
