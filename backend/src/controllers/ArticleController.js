const models = require("../models");

const getArticles = (req, res) => {
  models.article
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getLast = (req, res) => {
  models.article
    .findLast()
    .then(([rows]) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getArticleById = (req, res) => {
  models.article
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

const addArticle = (req, res) => {
  const article = req.body;
  if (req.file) {
    article.Image = req.file.filename;
  }

  models.article
    .insert(article)
    .then(([result]) => {
      res.location(`/article/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateArticle = (req, res) => {
  const article = req.body;
  article.id = parseInt(req.params.id, 10);

  models.article
    .update(article)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteArticle = (req, res) => {
  models.article
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
  getArticles,
  getLast,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
