const AbstractManager = require("../AbstractManager/AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "contact" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} where id_contact = ?`,
      [id]
    );
  }

  update(contact) {
    return this.database.query(
      `UPDATE ${this.table} SET phone = ?, email = ?, horaire = ? WHERE id_contact = ?`,
      [contact.phone, contact.email, contact.horaire, contact.id]
    );
  }
}

module.exports = ContactManager;
