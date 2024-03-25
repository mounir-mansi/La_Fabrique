const express = require("express");

const router = express.Router();
const TeamController = require("../controllers/TeamController");

// Obtenir tous les membres de l'équipe
router.get("/team", TeamController.getAllTeamMembers);

// Obtenir un membre spécifique de l'équipe par ID
router.get("/team/:id", TeamController.getTeamMemberByID);

// Créer un nouveau membre dans l'équipe
router.post("/team", TeamController.createTeamMember);

// Mettre à jour un membre existant de l'équipe
router.put("/team/:id", TeamController.updateTeamMember);

// Supprimer un membre de l'équipe
router.delete("/team/:id", TeamController.deleteTeamMember);

module.exports = router;
