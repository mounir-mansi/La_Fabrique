import React from "react";
import "./QuiSommesNous.css";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function QuiSommesNous() {
  return (
    <div>
      <Navbar />
      <Hero id={3} />
      Qui sommes nous
    </div>
  );
}

export default QuiSommesNous;
