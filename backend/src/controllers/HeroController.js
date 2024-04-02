const models = require("../models");

const getHero = (req, res) => {
  models.hero
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getHerobyId = (req, res) => {
  models.hero
    .find(req.params.id)
    .then(([rows]) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addHero = (req, res) => {
  const hero = req.body;
  models.hero
    .insert(hero)
    .then(([result]) => {
      res.location(`/hero/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateHero = (req, res) => {
  const hero = req.body;
  hero.id = parseInt(req.params.id, 10);
  models.hero
    .update(hero)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteHero = (req, res) => {
  models.hero
    .delete(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getHero,
  getHerobyId,
  addHero,
  updateHero,
  deleteHero,
};
