const models = require("../models");

const getCarroussel = (req, res) => {
  models.carroussel
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCarrousselById = (req, res) => {
  models.carroussel
    .find(req.params.id)
    .then((rows) => {
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

const addCarroussel = (req, res) => {
  const carroussel = req.body;
  models.carroussel
    .insert(carroussel)
    .then((result) => {
      res.location(`/carroussel/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateCarroussel = (req, res) => {
  const carroussel = req.body;
  carroussel.id_carroussel = parseInt(req.params.id, 10); // Assurez-vous que l'identifiant est correctement nommé
  models.carroussel
    .update(carroussel)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteCarroussel = (req, res) => {
  models.carroussel
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
  getCarroussel,
  getCarrousselById,
  addCarroussel,
  updateCarroussel,
  deleteCarroussel,
};
