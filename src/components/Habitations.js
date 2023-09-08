import React from "react";
import { Link } from "react-router-dom";
import "../sass/main.css";
import logementsData from "./logements.json";

const LogementsComponent = () => {
  return (
    <div className="gallery">
      {logementsData.map((logement, index) => (
        <div key={index} className="gallery-item">
          <Link
            to={`/carrousel?title=${encodeURIComponent(logement.title)}&cover=${encodeURIComponent(logement.cover)}&location=${encodeURIComponent(logement.location)}
            &rating=${encodeURIComponent(logement.rating)}&pictures=${encodeURIComponent(logement.pictures)}&hostName=${encodeURIComponent(logement.host.name)}
            &hostPicture=${encodeURIComponent(logement.host.picture)}`}
          >
            <img
              className="logement-img"
              src={logement.cover}
              alt={`Logement ${index + 1}`}
            />
          </Link>
          <p className="title">{logement.title}</p>
        </div>
      ))}
    </div>
  );
};

export default LogementsComponent;

