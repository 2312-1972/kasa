import React from "react";
import { Link } from "react-router-dom"; // Importez Link
import "../sass/main.css";
import logementsData from "./logements.json";

const LogementsComponent = () => {
  return (
    <div className="gallery">
      {logementsData.map((logement) => (
        <Link
          key={logement.id}
          to={`/carrousel?id=${logement.id}`} // Spécifiez la destination du lien
          className="gallery-item"
        >
          <div className="logement-img-container">
            <img
              className="logement-img"
              src={logement.cover}
              alt={`Logement ${logement.id}`}
            />
          </div>
          <p className="title">{logement.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default LogementsComponent;
