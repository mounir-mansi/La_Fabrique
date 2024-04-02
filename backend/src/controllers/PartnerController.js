const models = require("../models");

const getPartner = (req, res) => {
  models.partner
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getPartnerByID = (req, res) => {
  models.partner
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

const createPartner = (req, res) => {
  const partner = req.body;
  if (req.file) {
    partner.logo = req.file.filename;
  }
  console.info("Creating partner element", partner);
  models.partner
    .insert(partner)
    .then(([result]) => {
      res.location(`/partners/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updatePartner = (req, res) => {
  const partner = req.body;
  partner.id_partner = parseInt(req.params.id, 10);

  models.partner
    .update(partner)
    .then(() => {
      res.status(204).send("Successfully updated partner element");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deletePartner = (req, res) => {
  models.partner
    .delete(req.params.id)
    .then(() => {
      res.status(204).send("Successfully deleted partner element");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getPartner,
  getPartnerByID,
  createPartner,
  updatePartner,
  deletePartner,
};
