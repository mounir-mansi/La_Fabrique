const models = require("../models");

const getContact = (req, res) => {
  models.contact
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getContactbyId = (req, res) => {
  models.contact
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

const updateContact = (req, res) => {
  const contact = req.body;
  contact.id = parseInt(req.params.id, 10);
  models.contact
    .update(contact)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getContact,
  getContactbyId,
  updateContact,
};
