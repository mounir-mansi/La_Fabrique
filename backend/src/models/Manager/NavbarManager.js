const models = require("../models");

const getNavbarElement = (req, res) => {
  models.navbar
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getNavbarElementByID = (req, res) => {
  models.navbar
    .findByPK(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
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

const createNavbarElement = (req, res) => {
  const navbar = req.body;
  const userID = req.User_ID;
  if (req.file) {
    navbar.Image = req.file.filename;
  }
  console.info("creation navbar element", navbar);
  models.navbar
    .insert(navbar, userID)
    .then(([result]) => {
      res.location(`/navbars/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateNavbarElement = (req, res) => {
  const navbar = req.body;
  navbar.id = parseInt(req.params.id, 10);

  models.navbar
    .update(navbar)
    .then(() => {
      res.status(204).send("Successfully updated navbar Element");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteNavbarElement = (req, res) => {
  models.navbar
    .delete(req.params.id)
    .then(() => {
      res.status(204).send("Successfully deleted Navbar Element");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getNavbarElement,
  getNavbarElementByID,
  createNavbarElement,
  updateNavbarElement,
  deleteNavbarElement,
};
