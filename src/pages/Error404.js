import React from "react";
import { Link } from "react-router-dom";
import "../sass/main.css";

function Error404() {
  return (
    <div className="app-404">
      <div className="error-section">
        {" "}
        <h1 className="error-title">404</h1>
        <h2 className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <h2 className="error-text-mob">
          Oups! La page que <br/> vous demandez n'existe pas.
        </h2>
      </div>
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default Error404;
