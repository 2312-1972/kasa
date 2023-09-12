import React from "react";
import { useLocation } from "react-router-dom";

const Title = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // On récupère les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const situation = searchParams.get("location");

  return (
    <div className="container-location">
      <p className="carrousel-title"> {title}</p>
      <p className="carrousel-location">{situation}</p>
    </div>
  );
};

export default Title;
