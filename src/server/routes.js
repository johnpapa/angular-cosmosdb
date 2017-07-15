const express = require('express');
const router = express.Router();

const heroService = require('./hero.service');

// https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('the api works');
});

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
  heroService.postHeroes(req, res);
});

router.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});

module.exports = router;
