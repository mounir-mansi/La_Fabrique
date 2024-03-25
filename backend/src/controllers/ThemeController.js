const models = require("../models");

const getAllThemes = (req, res) => {
  models.theme
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getThemeByID = (req, res) => {
  models.theme
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

const createTheme = (req, res) => {
  const theme = req.body;
  models.theme
    .insert(theme)
    .then(([result]) => {
      res.location(`/themes/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateTheme = (req, res) => {
  const theme = req.body;
  theme.id_theme = parseInt(req.params.id, 10);

  models.theme
    .update(theme)
    .then(() => {
      res.status(204).send("Successfully updated theme");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteTheme = (req, res) => {
  models.theme
    .delete(req.params.id)
    .then(() => {
      res.status(204).send("Successfully deleted theme");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllThemes,
  getThemeByID,
  createTheme,
  updateTheme,
  deleteTheme,
};
