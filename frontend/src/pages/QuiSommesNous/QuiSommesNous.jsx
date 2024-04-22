import React from "react";
import "./QuiSommesNous.css";
import Hero from "../../components/Hero/Hero";
import Qsn from "../../components/Qsn/Qsn";
import Partenere from "../../components/Partenere/Partenere";

function QuiSommesNous() {
  return (
    <div>
      <Hero id={3} />
      <Qsn id={1} />
      <Partenere />
    </div>
  );
}

export default QuiSommesNous;
