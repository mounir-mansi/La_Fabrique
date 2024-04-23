import React from "react";
import "./NosFormation.css";
import Hero from "../../components/Hero/Hero";
import Formation from "../../components/Formation/formation";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

function NosFormation() {
  return (
    <div>
      <div className="Formation__content">
        <Hero id={5} />
        <Formation id={1} />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default NosFormation;
