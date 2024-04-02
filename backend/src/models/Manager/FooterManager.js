const AbstractManager = require("../AbstractManager/AbstractManager");

class FooterManager extends AbstractManager {
  constructor() {
    super({ table: "footer" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} where id_footer = ?`,
      [id]
    );
  }

  update(footer) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ? WHERE id_footer = ?`,
      [footer.content, footer.id]
    );
  }
}

module.exports = FooterManager;
