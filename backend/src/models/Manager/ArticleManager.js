const AbstractManager = require("../AbstractManager/AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
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

  insert(article) {
    return this.database.query(
      `INSERT INTO ${this.table} (id_theme, title, content, picture, date, link) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        article.id_theme,
        article.title,
        article.content,
        article.picture,
        article.date,
        article.link,
      ]
    );
  }

  update(article) {
    return this.database.query(
      `UPDATE ${this.table} SET id_theme = ?, title = ?, content = ?, picture = ?, date = ?, link = ? WHERE id_article = ?`,
      [
        article.id_theme,
        article.title,
        article.content,
        article.picture,
        article.date,
        article.link,
        article.id,
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
