import React, { useState, useEffect } from "react";
import "./Footer.css";
import Newsletter from "../Newsletter/Newsletter";
import Logo from "../../../assets/Logo/LOGO-LF-VIOLET-TXT (1).png";
import Fb from "../../../assets/Rs/facebook.png";
import Insta from "../../../assets/Rs/instagram.png";
import Linkedin from "../../../assets/Rs/linkedin.png";

function Footer() {
  const [footerData, setFooterData] = useState([]);
  const [footerDataContact, setFooterDataContact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/footer/1`);
        if (!response.ok) {
          throw new Error("Failed to fetch footer data");
        }
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataContact = async () => {
      try {
        const response = await fetch(`http://localhost:5000/footer/contact`);
        if (!response.ok) {
          throw new Error("Failed to fetch footer contact data");
        }
        const data = await response.json();
        setFooterDataContact(data);
      } catch (error) {
        console.error("Error fetching footer contact data:", error);
      }
    };
    fetchDataContact();
  }, []);

  return (
    <div className="footer">
      <Newsletter />
      <div className="footer_content">
        <div>
          <ul>
            <li key={footerData.id_footer}>
              <div className="Footer__title">{footerData.title}</div>
              <div className="Footer__information">
                {footerData.information}
              </div>
            </li>
            <li key={2}>
              <div className="Footer__title">{footerDataContact[0]?.title}</div>
              <div className="Footer__contact_horaire">
                {footerDataContact[0]?.contact_horaire}
              </div>
            </li>
            <li key={3}>
              <div className="Footer__title">{footerDataContact[1]?.title}</div>
              <div className="Footer__contact_email">
                {footerDataContact[1]?.contact_email}
              </div>
              <div className="Footer__contact_phone">
                {footerDataContact[1]?.contact_phone}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="footer__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer__socialmedia">
          <a target="_blank" href="/">
            <img src={Fb} alt="" />
          </a>
          <a target="_blank" href="/">
            <img src={Insta} alt="" />
          </a>
          <a target="_blank" href="/">
            <img src={Linkedin} alt="" />
          </a>
        </div>
        <div className="footer__mentionslegales">
          <a target="_blank" href="/">
            Mentions Légales
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
