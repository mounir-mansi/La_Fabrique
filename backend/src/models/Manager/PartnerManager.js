const AbstractManager = require("../AbstractManager/AbstractManager");

class PartnerManager extends AbstractManager {
  constructor() {
    super({ table: "partner" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_partner = ?`,
      [id]
    );
  }

  insert(partner) {
    return this.database.query(
      `INSERT INTO ${this.table} (logo, title) VALUES (?, ?)`,
      [partner.logo, partner.title]
    );
  }

  update(partner) {
    return this.database.query(
      `UPDATE ${this.table} SET logo = ?, title = ? WHERE id_partner = ?`,
      [partner.logo, partner.title, partner.id_partner]
    );
  }

  delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_partner = ?`,
      [id]
    );
  }
}

module.exports = PartnerManager;
