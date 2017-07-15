const mongoose = require('mongoose');
// Set to Node.js native promises
// Per http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

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
