const names = require("./names.json");
const middleNames = require("./middle-names.json");
const places = require("./places.json");
const starWars = require("./starwars-names.json");
const uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: names,
  name: uniqueRandomArray(names),
  place: uniqueRandomArray(places),
  middleName: uniqueRandomArray(middleNames),
  starWarsName: uniqueRandomArray(starWars),
};
