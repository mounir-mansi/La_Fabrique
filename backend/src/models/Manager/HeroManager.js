const AbstractManager = require("../AbstractManager/AbstractManager");

class HeroManager extends AbstractManager {
  constructor() {
    super({ table: "hero" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} where id_hero = ?`,
      [id]
    );
  }

  insert(hero) {
    return this.database.query(
      `INSERT INTO ${this.table} (picture, title) VALUES (?, ?)`,
      [hero.picture, hero.title]
    );
  }

  update(hero) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, picture = ? WHERE id_hero = ?`,
      [hero.title, hero.picture, hero.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id_hero = ?`, [
      id,
    ]);
  }
}

module.exports = HeroManager;
