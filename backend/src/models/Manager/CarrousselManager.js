const AbstractManager = require("../AbstractManager/AbstractManager");

class CarrousselManager extends AbstractManager {
  constructor() {
    super({ table: "carroussel" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = CarrousselManager;
