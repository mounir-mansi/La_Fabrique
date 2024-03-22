const express = require("express");

const router = express.Router();

const ContactController = require("../controllers/ContactController");

// Get all articles
router.get("/contact", ContactController.getContact);

// Get a specific article by ID
router.get("/contact/:id", ContactController.getContactbyId);

// Update an existing article
router.put("/contact/:id", ContactController.updateContact);

module.exports = router;
