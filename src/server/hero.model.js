const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  { collection: 'heroes' }
);

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
