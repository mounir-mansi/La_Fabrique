import React from "react";
import "./QuiSommesNous.css";
import Hero from "../../components/Hero/Hero";
import Qsn from "../../components/Qsn/Qsn";
import Partenere from "../../components/Partenere/Partenere";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

function QuiSommesNous() {
  return (
    <div>
      <Hero id={3} />
      <Qsn id={3} />
      <Partenere />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default QuiSommesNous;
