const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Admin Schema
const WordsSchema = new Schema({
  Word: String,
});

module.exports = AddWordsSchema = mongoose.model(
  "Words",
  WordsSchema
);