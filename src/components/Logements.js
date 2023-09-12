import React from "react";
import { Link } from "react-router-dom";
import "../sass/main.css";
import logementsData from "./logements.json";

const LogementsComponent = () => {
  return (
    <div className="gallery">
      {logementsData.map((logement) => (
        <div key={logement.id} className="gallery-item">
          <Link to={`/carrousel?id=${logement.id}`}>
            <div className="logement-img-container">
              <img
                className="logement-img"
                src={logement.cover}
                alt={`Logement ${logement.id}`}
              />
            </div>
          </Link>
          <p className="title">{logement.title}</p>
        </div>
      ))}
    </div>
  );
};

export default LogementsComponent;
