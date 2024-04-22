import React from "react";
import "./InterventionEtAnimation.css";
import Intervention from "../../components/Intervention/Intervention";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

function InterventionEtAnimation() {
  return (
    <div>
      <Hero id={4} />
      <Intervention id={1} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default InterventionEtAnimation;
