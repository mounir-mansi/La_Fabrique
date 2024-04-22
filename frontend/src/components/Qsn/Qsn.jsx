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
import "./Qsn.css";
import { useTeam } from "../../context/QsnContext"; // Importez le contexte de l'équipe

function AboutUs() {
  const { teamMembers } = useTeam();
  console.info("team", teamMembers);

  if (!teamMembers || teamMembers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about-us">
      <div className="section-title">
        <h1>QUI SOMMES-NOUS ?</h1>
      </div>
      <div className="description">
        <p>
          La Fabrique est née de la réflexion de trois femmes ayant évolué près
          de dix ans en tant que gestionnaires de projet et d’actions
          associatives. Elle est le fruit d’observation du tissu associatif
          local et des évolutions politiques et institutionnelles du secteur. La
          Fabrique a vocation à répondre aux besoins que nous avons identifiés
          au cours de nos précédentes expériences.
          <br /> <br />
          Nous souhaitons construire un pont entre les opérateurs et les
          institutions afin de favoriser la création de projets pertinents et
          participer à l’amélioration de la qualité des actions publiques.
          Convaincues de la richesse et des atouts présents sur notre
          territoire, nous souhaitons mettre notre expérience professionnelle au
          service de la communauté à travers différentes offres :<br />
          <br />
          Intervention et animation : Nous intervenons en partenariat étroit
          avec les avec les institutions pour promouvoir les valeurs de la
          citoyenneté active et de l’interculturalité au travers d’évènements
          ludiques. Ainsi nous réalisons des consultations citoyennes, nous
          animons des débats, créons des outils pédagogiques et participons à la
          réalisation d’événements comme la Fête de l’Europe ou les Erasmus
          Days.
          <br /> <br />
          Accompagnement au portage de projet : Nous avons à cœur de faciliter
          l'émergence de nouveaux projets en proposant aux porteurs de projets
          locaux un soutien informatif, technique, mais aussi et surtout en
          favorisant l’accès aux fonds européens grâce à notre expertise en la
          matière. Nous accompagnons les opérateurs dans la compréhension du
          cadre d’intervention des financeurs et l’ingénierie de développement
          de projets ; de la conception à la réalisation.
          <br />
          <br /> Formation : La vie associative opère des mutations importantes
          dans son fonctionnement afin de répondre aux changements auxquels elle
          est confrontée. L’évolution du rapport à l’engagement et l’impératif
          de professionnalisation des opérateurs, les incitent à repenser et
          rénover leur cadre d’action. Nous formons les acteurs du territoire à
          la compréhension des relations entre les individus grâce aux méthodes
          de l’éducation non formelle. Convaincues de l’importance du « vivre
          ensemble », nous souhaitons contribuer au « faire ensemble ».
        </p>
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

export default AboutUs;
