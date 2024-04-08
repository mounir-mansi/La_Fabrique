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

  findFooterContact() {
    return this.database.query(`
    SELECT  
    f.id_footer,
    f.title,
    c1.phone AS contact_phone,
    c1.email AS contact_email,
    c1.horaire AS contact_horaire
FROM 
    footer f
LEFT JOIN 
    contact c1 ON f.id_contact = c1.id_contact
WHERE 
    f.id_footer IN (2, 3)
    `);
  }

  update(footer) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ? WHERE id_footer = ?`,
      [footer.content, footer.id]
    );
  }
}

module.exports = FooterManager;
