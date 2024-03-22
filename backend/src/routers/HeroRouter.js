const express = require("express");

const router = express.Router();

const HeroController = require("../controllers/HeroController");

// Get hero
router.get("/hero", HeroController.getHero);

// Get a specific content of hero by ID
router.get("/hero/:id", HeroController.getHerobyId);

// Create a new hero section
router.post("/hero", HeroController.addHero);

// Update an existing hero title
router.put("/hero/:id", HeroController.updateHero);

// Delete an hero section
router.delete("/hero/:id", HeroController.deleteHero);

module.exports = router;
