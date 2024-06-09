const models = require("../models");

const getElementLists = (req, res) => {
  models.ElementList.findAll()
    .then((elementLists) => {
      res.send(elementLists);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getElementListByIdSection = (req, res) => {
  const { sectionId } = req.params;
  models.ElementList.findBySectionId(sectionId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createElementList = (req, res) => {
  const elementList = req.body;
  models.ElementList.insert(elementList)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateElementList = (req, res) => {
  const { id } = req.params;
  const elementList = req.body;
  elementList.id_element = id;
  models.ElementList.update(elementList)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteElementList = (req, res) => {
  const { id } = req.params;
  models.ElementList.delete(id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getElementLists,
  getElementListByIdSection,
  createElementList,
  updateElementList,
  deleteElementList,
};
