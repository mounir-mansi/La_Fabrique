import "./Partenere.css";

function Partenere() {
  return (
    <div className="partenere">
      <h2>Ils nous font confiance</h2>
      <div className="card-partenere">
        <img
          className="picture-partenere"
          src="../src/assets/dep-13.png"
          alt="article"
        />
        <img
          className="picture-partenere"
          src="../src/assets/aca-13.png"
          alt="article"
        />
        <img
          className="picture-partenere"
          src="../src/assets/réseau-missions_locales.png"
          alt="article"
        />
        <img
          className="picture-partenere"
          src="../src/assets/association-nationale-pour-le-déploiment-du-service-civique-solidarité-séniors.png"
          alt="article"
        />
      </div>
    </div>
  );
}

export default Partenere;
