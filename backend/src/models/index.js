require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ArticleManager = require("./Manager/ArticleManager");
const CarrousselManager = require("./Manager/CarrousselManager");
const ContactManager = require("./Manager/ContactManager");
const FooterManager = require("./Manager/FooterManager");
const HeroManager = require("./Manager/HeroManager");
const NavbarManager = require("./Manager/NavbarManager");
const PartnerManager = require("./Manager/PartnerManager");
const SectionManager = require("./Manager/SectionManager");
const TeamManager = require("./Manager/TeamManager");
const ThemeManager = require("./Manager/ThemeManager");

models.article = new ArticleManager();
models.article.setDatabase(pool);

models.carroussel = new CarrousselManager();
models.carroussel.setDatabase(pool);

models.contact = new ContactManager();
models.contact.setDatabase(pool);

models.footer = new FooterManager();
models.footer.setDatabase(pool);

models.hero = new HeroManager();
models.hero.setDatabase(pool);

models.navbar = new NavbarManager();
models.navbar.setDatabase(pool);

const partnerManager = new PartnerManager();
partnerManager.setDatabase(pool);

models.section = new SectionManager();
models.section.setDatabase(pool);

const teamManager = new TeamManager();
teamManager.setDatabase(pool);

const themeManager = new ThemeManager();
themeManager.setDatabase(pool);

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
