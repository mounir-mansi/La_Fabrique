const models = require("../models");

const getAllTeamMembers = (req, res) => {
  models.team
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTeamMemberByID = (req, res) => {
  models.team
    .find(req.params.id)
    .then((rows) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createTeamMember = (req, res) => {
  const teamMember = req.body;
  if (req.file) {
    teamMember.picture = req.file.filename;
  }
  console.info("Creating team member", teamMember);
  models.team
    .insert(teamMember)
    .then(([result]) => {
      res.location(`/team/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateTeamMember = (req, res) => {
  const teamMember = req.body;
  teamMember.id_team = parseInt(req.params.id, 10);

  models.team
    .update(teamMember)
    .then(() => {
      res.status(204).send("Successfully updated team member");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteTeamMember = (req, res) => {
  models.team
    .delete(req.params.id)
    .then(() => {
      res.status(204).send("Successfully deleted team member");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllTeamMembers,
  getTeamMemberByID,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};
