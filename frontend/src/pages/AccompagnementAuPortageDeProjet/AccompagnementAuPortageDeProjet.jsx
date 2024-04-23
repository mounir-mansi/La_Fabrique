import React from "react";
import "./AccompagnementAuPortageDeProjet.css";
import Hero from "../../components/Hero/Hero";
import Accompagnement from "../../components/Accompagnement/Accompagnement";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

function AccompagnementAuPortageDeProjet() {
  return (
    <div>
      <Hero id={6} />
      <Accompagnement id={2} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AccompagnementAuPortageDeProjet;
