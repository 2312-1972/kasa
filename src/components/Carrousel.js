import React from "react";
import { useLocation } from "react-router-dom";

const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Récupérez les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const cover = searchParams.get("cover");

  return (
    <div>
      <p>Titre : {title}</p>
      <img src={cover} alt={title} />
      {/* Affichez d'autres informations du logement ici */}
    </div>
  );
};

export default Carrousel;
