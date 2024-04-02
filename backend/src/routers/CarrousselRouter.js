const express = require("express");

const router = express.Router();

const CarrousselController = require("../controllers/CarrousselController");

// Get all articles
router.get("/carroussel", CarrousselController.getCarroussel);

module.exports = router;
