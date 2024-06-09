const express = require("express");

const router = express.Router();
const ElementListController = require("../controllers/ElementListController");

// Get element lists by section ID
router.get(
  "/section/:sectionId/elementslist",
  ElementListController.getElementListByIdSection
);

// Add element list to a section
router.post(
  "/section/:sectionId/elementslist",
  ElementListController.createElementList
);

// Update element list of a section
router.put(
  "/section/:sectionId/elementslist/:id",
  ElementListController.updateElementList
);

// Delete element list of a section
router.delete(
  "/section/:sectionId/elementslist/:id",
  ElementListController.deleteElementList
);

module.exports = router;
