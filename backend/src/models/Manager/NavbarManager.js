const AbstractManager = require("../AbstractManager/AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "navbar" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} where id_navbar = ?`,
      [id]
    );
  }

  insert(navbar) {
    return this.database.query(
      `INSERT INTO ${this.table} (id_hero, title) VALUES (?, ?)`,
      [navbar.id_hero, navbar.title]
    );
  }

  update(navbar) {
    return this.database.query(
      `UPDATE ${this.table} SET id_hero = ?, title = ? WHERE id_navbar = ?`,
      [navbar.id_hero, navbar.title, navbar.id_navbar]
    );
  }

  delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_navbar = ?`,
      [id]
    );
  }
}

module.exports = ContactManager;
