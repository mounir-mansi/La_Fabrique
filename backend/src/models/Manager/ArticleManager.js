const AbstractManager = require("../AbstractManager/AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_article = ?`,
      [id]
    );
  }

  findLast() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY date DESC LIMIT 9`
    );
  }

  insert(article) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, description, date, picture, picture_hero) VALUES (?, ?, ?, ?, ?)`,
      [
        article.title,
        article.description,
        article.date,
        article.picture,
        article.picture_hero,
      ]
    );
  }

  update(article) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, description = ?, date = ?, picture = ?, picture_hero = ? WHERE id_article = ?`,
      [
        article.title,
        article.description,
        article.date,
        article.picture,
        article.picture_hero,
        article.id_article,
      ]
    );
  }

  delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_article = ?`,
      [id]
    );
  }
}

module.exports = ArticleManager;
