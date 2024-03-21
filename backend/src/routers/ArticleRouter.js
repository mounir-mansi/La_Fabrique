const express = require("express");

const router = express.Router();

const ArticleController = require("../controllers/ArticleController");

// Get all articles
router.get("/article", ArticleController.getArticles);

// Get a specific article by ID
router.get("/article/:id", ArticleController.getArticleById);

// Create a new article
router.post("/article", ArticleController.addArticle);

// Update an existing article
router.put("/article/:id", ArticleController.editArticle);

// Delete an article
router.delete("/article/:id", ArticleController.deleteArticle);

module.exports = router;
