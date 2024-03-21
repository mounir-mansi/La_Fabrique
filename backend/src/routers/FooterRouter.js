const express = require("express");

const router = express.Router();

const FooterController = require("../controllers/FooterController");

// Get footer content
router.get("/footer", FooterController.getFooter);

// Get a specific title footer by ID
router.get("/footer/:id", FooterController.getFooterbyId);

// Update title footer
router.put("/footer/:id", FooterController.updateFooter);

module.exports = router;
