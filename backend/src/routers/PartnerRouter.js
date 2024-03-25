const express = require("express");

const router = express.Router();
const PartnerController = require("../controllers/PartnerController");

// Obtenir tous les partenaires
router.get("/partners", PartnerController.getPartner);

// Obtenir un partenaire spécifique par ID
router.get("/partners/:id", PartnerController.getPartnerByID);

// Créer un nouveau partenaire
router.post("/partners", PartnerController.createPartner);

// Mettre à jour un partenaire existant
router.put("/partners/:id", PartnerController.updatePartner);

// Supprimer un partenaire
router.delete("/partners/:id", PartnerController.deletePartner);

module.exports = router;
