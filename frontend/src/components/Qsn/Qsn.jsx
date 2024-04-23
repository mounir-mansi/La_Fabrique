// import React from "react";
// import "./Qsn.css"; // Assurez-vous d'importer votre fichier CSS approprié

// function AboutUs() {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "John Doe",
//       biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       image: "path/to/image1.jpg",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       biography:
//         "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       image: "path/to/image2.jpg",
//     },
//     // Ajoutez d'autres membres de l'équipe selon vos besoins
//   ];

//   return (
//     <div className="about-us">
//       <div className="section-title">
//         <h2>QUI SOMMES-NOUS ?</h2>
//       </div>
//       <div className="description">
//         <p>Description de votre entreprise ou organisation.</p>
//       </div>
//       <div className="team-title">
//         <h3>Notre équipe</h3>
//         <hr className="divider" />
//       </div>
//       <div className="team-members">
//         {teamMembers.map((member) => (
//           <div key={member.id} className="team-member">
//             <img
//               className="member-image"
//               src={member.image}
//               alt={member.name}
//             />
//             <div className="member-details">
//               <h4>{member.name}</h4>
//               <p>{member.biography}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import React from "react";
import PropTypes from "prop-types";
import "./Qsn.css";
import { useTeam } from "../../context/QsnContext"; // Importez le contexte de l'équipe
import { useSection } from "../../context/SectionContext";

function AboutUs({ id }) {
  const sections = useSection();
  const sectionSpecify = sections.sections[id];
  const { teamMembers } = useTeam();
  console.info("team", teamMembers);

  if (!teamMembers || teamMembers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about-us">
      <div className="section-title">
        <h1>{sectionSpecify.title}</h1>
      </div>
      <div className="description">
        {sectionSpecify.content.split("\n").map((paragraph) => (
          <p key={sectionSpecify.id_section}>
            {paragraph.split("**").map((text, i) => {
              return i % 2 === 0 ? (
                // Remplacer ## par le marqueur pour le centrage
                text.split("##").map((part, j) => {
                  return j % 2 === 0 ? (
                    <span key={sectionSpecify.id_section}>{part}</span>
                  ) : (
                    // Encapsuler la partie centrée dans un div avec textAlign: center
                    <div
                      key={sectionSpecify.id_section}
                      style={{ textAlign: "center", display: "block" }}
                    >
                      <span>{part}</span>
                    </div>
                  );
                })
              ) : (
                <strong key={sectionSpecify.id_section}>{text}</strong>
              );
            })}
          </p>
        ))}
      </div>
      <div className="team-title">
        <h2>Notre équipe</h2>
        <hr className="divider" />
      </div>
      <div className="team-members">
        {teamMembers[0].map((member, index) => (
          <div
            key={member.id_team}
            className={`team-member ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <div className="member-details">
              <img
                className="member-image"
                src="../src/assets/img.png"
                alt="article"
              />
              <h3>
                {member.firstname}&nbsp;
                {member.lastname}
              </h3>
              {/* Affichage des paragraphes */}
              {member.biography.split("\n").map((paragraph) => (
                <p key={member.id_team}>
                  {/* Mettre en gras les caractères spécifiques */}
                  {paragraph.split("**").map((text, i) => {
                    return i % 2 === 0 ? (
                      <span key={member.id_team}>{text}</span>
                    ) : (
                      <strong key={member.id_team}>{text}</strong>
                    );
                  })}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="contribution">
        <div className="contribution-title">
          <h2>Vous voulez nous aider ?</h2>
          <h3> Adhérez et Contribuez dès Aujourd'hui !</h3>
        </div>
        <p>
          Apporter à chacun les connaissances ou les compétences dont il ou elle
          a besoin nous apparait être le meilleur moyen de favoriser la création
          de projets innovants et pertinents. Vous partagez cette vision ?
          Contribuez à notre cause en faisant un don dès aujourd'hui. Ensemble,
          faisons naître de nouveaux projets passionnants.
        </p>
        <a href="https://www.helloasso.com/associations/la-fabrique-13/adhesions/adhesion">
          <button type="button">Adhérer</button>
        </a>{" "}
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default AboutUs;
