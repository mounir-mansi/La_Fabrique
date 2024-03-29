// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// create express app

const express = require("express");

const app = express();

// use some application-level middlewares

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(cors());

// app.use(cors());
// app.use("/upload", express.static(path.join(__dirname, "../assets/upload")));

// app.use(cors());

app.use(cors());

// app.use(cors());
// app.use("/upload", express.static(path.join(__dirname, "../assets/upload")));

// app.use(cors());

// app.use(cors());
// app.use("/upload", express.static(path.join(__dirname, "../assets/upload")));

app.use(cors());
// import and mount the API routes

const ArticleRouter = require("./routers/ArticleRouter");
const CarrousselRouter = require("./routers/CarrousselRouter");
const ContactRouter = require("./routers/ContactRouter");
const FooterRouter = require("./routers/FooterRouter");
const HeroRouter = require("./routers/HeroRouter");
const NavbarRouter = require("./routers/NavbarRouter");
const PartnerRouter = require("./routers/PartnerRouter");
const SectionRouter = require("./routers/SectionRouter");
const TeamRouter = require("./routers/TeamRouter");
const ThemeRouter = require("./routers/ThemeRouter");

app.use(ArticleRouter);
app.use(CarrousselRouter);
app.use(ContactRouter);
app.use(FooterRouter);
app.use(HeroRouter);
app.use(NavbarRouter);
app.use(PartnerRouter);
app.use(SectionRouter);
app.use(TeamRouter);
app.use(ThemeRouter);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
