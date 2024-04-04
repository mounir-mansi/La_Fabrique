const express = require("express");

const router = express.Router();

const CarrousselController = require("../controllers/CarrousselController");

// Get all articles
router.get("/carroussel", CarrousselController.getCarroussel);

// Get a specific article by ID
router.get("/carroussel/:id", CarrousselController.getCarrousselById);

// Create a new article
router.post("/carroussel", CarrousselController.addCarroussel);

// Update an existing article
router.put("/carroussel/:id", CarrousselController.updateCarroussel);

// Delete an article
router.delete("/carroussel/:id", CarrousselController.deleteCarroussel);

module.exports = router;
