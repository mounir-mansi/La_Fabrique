const AbstractManager = require("../AbstractManager/AbstractManager");

class ElementListManager extends AbstractManager {
  constructor() {
    super({ table: "elements_list" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_element = ?`,
      [id]
    );
  }

  insert(elementList) {
    return this.database.query(
      `INSERT INTO ${this.table} (id_section, content) VALUES (?, ?)`,
      [elementList.id_section, elementList.content]
    );
  }

  update(elementList) {
    return this.database.query(
      `UPDATE ${this.table} SET id_section = ?, content = ? WHERE id_element = ?`,
      [elementList.id_section, elementList.content, elementList.id_element]
    );
  }

  delete(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE id_element = ?`,
      [id]
    );
  }

  findBySectionId(sectionId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE id_section_article = ?`,
      [sectionId]
    );
  }
}

module.exports = ElementListManager;
