const AbstractManager = require("../AbstractManager/AbstractManager");

class CarrousselManager extends AbstractManager {
  constructor() {
    super({ table: "carroussel" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_carroussel = ?`,
      [id]
    );
  }

  delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_carroussel = ?`,
      [id]
    );
  }

  update(carroussel) {
    return this.database.query(
      `UPDATE ${this.table} SET picture = ? WHERE id_carroussel = ?`,
      [carroussel.picture, carroussel.id_carroussel]
    );
  }
}

module.exports = CarrousselManager;
