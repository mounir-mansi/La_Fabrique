const AbstractManager = require("../AbstractManager/AbstractManager");

class SectionManager extends AbstractManager {
  constructor() {
    super({ table: "section" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_section = ?`,
      [id]
    );
  }

  insert(section) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, content, picture, route) VALUES (?, ?, ?, ?)`,
      [section.title, section.content, section.picture, section.route]
    );
  }

  update(section) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, picture = ?, route = ? WHERE id_section = ?`,
      [
        section.title,
        section.content,
        section.picture,
        section.route,
        section.id_section,
      ]
    );
  }

  delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_section = ?`,
      [id]
    );
  }
}

module.exports = SectionManager;
