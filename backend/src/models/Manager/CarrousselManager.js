const AbstractManager = require("../AbstractManager/AbstractManager");

class CarrousselManager extends AbstractManager {
  constructor() {
    super({ table: "carroussel" });
  }

  findAll() {
    return this.database.query(
      `SELECT article.title, article.content, article.date FROM article JOIN ${this.table} ON article.id_article = ${this.table}.id_article ORDER BY article.date DESC LIMIT 9`
    );
  }
}

module.exports = CarrousselManager;
