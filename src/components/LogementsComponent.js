import React from "react";
import { Link } from "react-router-dom";
import "../sass/main.css";
import logementsData from "./logements.json";

const LogementsComponent = () => {
  return (
    <div className="gallery">
      {logementsData.map((logement) => (
        <Link
          key={logement.id}
          to={`/logement/${logement.id}`} // Utilisation de  /logement/:id
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
