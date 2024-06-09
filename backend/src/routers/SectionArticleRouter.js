const express = require("express");

const router = express.Router();
const SectionArticleController = require("../controllers/SectionArticleController");

// Get sections by article ID
router.get(
  "/article/:articleId/sections",
  SectionArticleController.getSectionsByArticleId
);

// Add section to an article
router.post(
  "/article/:articleId/sections",
  SectionArticleController.addSectionToArticle
);

// Update section of an article
router.put(
  "/article/:articleId/sections/:sectionId",
  SectionArticleController.updateSectionOfArticle
);

// Delete section of an article
router.delete(
  "/article/:articleId/sections/:sectionId",
  SectionArticleController.deleteSectionOfArticle
);

module.exports = router;
