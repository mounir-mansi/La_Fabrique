import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__title">Abonnez-vous à notre newsletter</div>
        <div className="newsletter__form">
          <div className="newsletter__input">
            <input type="text" placeholder="Entrez votre adresse e-mail" />
          </div>
          <div className="newsletter__submit">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
