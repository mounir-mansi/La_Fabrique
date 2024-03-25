const models = require("../models");

const getSection = (req, res) => {
  models.section
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getSectionByID = (req, res) => {
  models.section
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

const createSection = (req, res) => {
  const section = req.body;
  if (req.file) {
    section.picture = req.file.filename;
  }
  console.info("Creating section", section);
  models.section
    .insert(section)
    .then(([result]) => {
      res.location(`/sections/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateSection = (req, res) => {
  const section = req.body;
  section.id_section = parseInt(req.params.id, 10);

  models.section
    .update(section)
    .then(() => {
      res.status(204).send("Successfully updated section");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteSection = (req, res) => {
  models.section
    .delete(req.params.id)
    .then(() => {
      res.status(204).send("Successfully deleted section");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getSection,
  getSectionByID,
  createSection,
  updateSection,
  deleteSection,
};
