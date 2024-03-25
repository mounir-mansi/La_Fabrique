const express = require("express");

const router = express.Router();
const SectionController = require("../controllers/SectionController");

// Obtenir toutes les sections
router.get("/sections", SectionController.getSection);

// Obtenir une section spécifique par ID
router.get("/sections/:id", SectionController.getSectionByID);

// Créer une nouvelle section
router.post("/sections", SectionController.createSection);

// Mettre à jour une section existante
router.put("/sections/:id", SectionController.updateSection);

// Supprimer une section
router.delete("/sections/:id", SectionController.deleteSection);

module.exports = router;
