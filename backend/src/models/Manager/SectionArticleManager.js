const AbstractManager = require("../AbstractManager/AbstractManager");

class SectionArticleManager extends AbstractManager {
  constructor() {
    super({ table: "section_article" });
  }

  findByArticleId(articleId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_article = ?`,
      [articleId]
    );
  }

  insert(articleId, section) {
    const { title, content } = section;
    return this.database.query(
      `INSERT INTO ${this.table} (id_article, title, content) VALUES (?, ?, ?)`,
      [articleId, title, content]
    );
  }

  update(articleId, sectionId, section) {
    const { title, content } = section;
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ? WHERE id_article = ? AND id_section = ?`,
      [title, content, articleId, sectionId]
    );
  }

  delete(articleId, sectionId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_article = ? AND id_section = ?`,
      [articleId, sectionId]
    );
  }
}

module.exports = SectionArticleManager;
