const models = require("../models");

const getSectionsByArticleId = (req, res) => {
  const { articleId } = req.params;
  models.sectionArticle
    .findByArticleId(articleId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addSectionToArticle = (req, res) => {
  const { articleId } = req.params;
  const section = req.body;
  models.sectionArticle
    .insert(articleId, section)
    .then(([result]) => {
      res
        .location(`/article/${articleId}/section/${result.insertId}`)
        .sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateSectionOfArticle = (req, res) => {
  const { articleId, sectionId } = req.params;
  const section = req.body;
  models.sectionArticle
    .update(articleId, sectionId, section)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteSectionOfArticle = (req, res) => {
  const { articleId, sectionId } = req.params;
  models.sectionArticle
    .delete(articleId, sectionId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getSectionsByArticleId,
  addSectionToArticle,
  updateSectionOfArticle,
  deleteSectionOfArticle,
};
