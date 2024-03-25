const express = require("express");

const router = express.Router();
const NavbarController = require("../controllers/NavbarController");

// Obtenir tous les éléments de la navbar
router.get("/navbar", NavbarController.getNavbarElement);

// Obtenir un élément spécifique de la navbar par ID
router.get("/navbar/:id", NavbarController.getNavbarElementByID);

// Créer une nouvelle entrée dans la navbar
router.post("/navbar", NavbarController.createNavbarElement);

// Mettre à jour un élément existant de la navbar
router.put("/navbar/:id", NavbarController.updateNavbarElement);

// Supprimer un élément de la navbar
router.delete("/navbar/:id", NavbarController.deleteNavbarElement);

module.exports = router;
