const models = require("../models");

const getFooter = (req, res) => {
  models.footer
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getFooterbyId = (req, res) => {
  models.footer
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

const updateFooter = (req, res) => {
  const footer = req.body;
  footer.id = parseInt(req.params.id, 10);
  models.footer
    .update(footer)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getFooter,
  getFooterbyId,
  updateFooter,
};
