import React from "react";
import "./Formation.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

function Formation() {
  return (
    <>
      <Navbar />
      <Hero id={5} />
      <div className="Formation">
        <div>Formation</div>
      </div>
    </>
  );
}

export default Formation;
