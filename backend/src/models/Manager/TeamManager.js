// Importation du gestionnaire abstrait
const AbstractManager = require("../AbstractManager/AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    // Appel du constructeur de la classe parent avec le nom de la table
    super({ table: "team" });
  }

  // Méthode pour récupérer tous les membres de l'équipe
  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  // Méthode pour récupérer un membre de l'équipe par ID
  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_team = ?`,
      [id]
    );
  }

  // Méthode pour insérer un nouveau membre dans l'équipe
  insert(team) {
    return this.database.query(
      `INSERT INTO ${this.table} (picture, lastname, firstname, biography) VALUES (?, ?, ?, ?)`,
      [team.picture, team.lastname, team.firstname, team.biography]
    );
  }

  // Méthode pour mettre à jour les détails d'un membre de l'équipe
  update(team) {
    return this.database.query(
      `UPDATE ${this.table} SET picture = ?, lastname = ?, firstname = ?, biography = ? WHERE id_team = ?`,
      [
        team.picture,
        team.lastname,
        team.firstname,
        team.biography,
        team.id_team,
      ]
    );
  }

  // Méthode pour supprimer un membre de l'équipe
  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id_team = ?`, [
      id,
    ]);
  }
}

module.exports = TeamManager;
