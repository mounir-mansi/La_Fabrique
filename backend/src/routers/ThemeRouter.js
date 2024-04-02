const express = require("express");

const router = express.Router();
const ThemeController = require("../controllers/ThemeController");

// Obtenir tous les thèmes
router.get("/themes", ThemeController.getAllThemes);

// Obtenir un thème spécifique par ID
router.get("/themes/:id", ThemeController.getThemeByID);

// Créer un nouveau thème
router.post("/themes", ThemeController.createTheme);

// Mettre à jour un thème existant
router.put("/themes/:id", ThemeController.updateTheme);

// Supprimer un thème
router.delete("/themes/:id", ThemeController.deleteTheme);

module.exports = router;
