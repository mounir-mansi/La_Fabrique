const AbstractManager = require("../AbstractManager/AbstractManager");

class ThemeManager extends AbstractManager {
  constructor() {
    super({ table: "theme" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_theme = ?`,
      [id]
    );
  }

  insert(theme) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      theme.name,
    ]);
  }

  update(theme) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id_theme = ?`,
      [theme.name, theme.id_theme]
    );
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id_theme = ?`, [
      id,
    ]);
  }
}

module.exports = ThemeManager;
