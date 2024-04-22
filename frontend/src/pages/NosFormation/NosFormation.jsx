import React from "react";
import "./NosFormation.css";
import Hero from "../../components/Hero/Hero";
import Formation from "../../components/Formation/formation";

function NosFormation() {
  return (
    <div>
      <div className="Formation__content">
        <Hero id={5} />
        <Formation id={2} />
      </div>
    </div>
  );
}

export default NosFormation;
