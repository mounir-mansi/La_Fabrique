const models = require("../models");

const getCarroussel = (req, res) => {
  models.carroussel
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getCarroussel,
};
