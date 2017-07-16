const Hero = require('./hero.model');
const ReadPreference = require('mongodb').ReadPreference;

const mongo = require('./mongo');
mongo.connect();

function getHeroes(req, res) {
  const query = Hero.find({}).read(ReadPreference.NEAREST);
  query
    .exec()
    .then(heroes => {
      res.status(200).json(heroes);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postHeroes(req, res) {
  const originalHero = { id: req.body.id, name: req.body.name, saying: req.body.saying };
  const hero = new Hero(originalHero);
  hero.save(error => {
    if (error) {
      res.status(500).send(error);
      return;
    }
    res.status(201).json(hero);
    console.log('Hero created successfully!');
  });
}

function putHero(req, res) {
  const originalHero = {
    id: parseInt(req.params.id, 10),
    name: req.body.name,
    saying: req.body.saying
  };
  Hero.findOne({ id: originalHero.id }, (error, hero) => {
    if (error || !hero) {
      res.status(404).send(`Hero not found. ${error}`);
      return;
    }
    hero.name = originalHero.name;
    hero.saying = originalHero.saying;
    hero.save(error => {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.status(200).json(hero);
      console.log('Hero udpated successfully!');
    });
  });
}

function deleteHero(req, res) {
  const id = parseInt(req.params.id, 10);
  Hero.findOneAndRemove({ id: id }, (error, hero) => {
    if (error || !hero) {
      res.status(404).send(`Hero not found. ${error}`);
      return;
    }
    res.status(200).json(hero);
    console.log('Hero deleted successfully!');
  });
}

module.exports = {
  getHeroes,
  postHeroes,
  putHero,
  deleteHero
};
