import React from "react";
import { useLocation } from "react-router-dom";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";
const Rating = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // On récupère les données du logement depuis les paramètres d'URL
  const rating = searchParams.get("rating");
  // Utilisation de la méthode `split` pour convertir la chaîne de tags en un tableau de tags
  const renderRatingStars = (rating) => {
    const maxStars = 5; // Nombre total d'étoiles
    const starElements = [];

    // Boucle pour créer les étoiles actives
    for (let i = 1; i <= rating; i++) {
      starElements.push(<img src={starActive} alt={`Star ${i}`} key={i} />);
    }

    // Boucle pour créer les étoiles inactives (si nécessaire)
    for (let i = rating + 1; i <= maxStars; i++) {
      starElements.push(<img src={starInactive} alt={`Star ${i}`} key={i} />);
    }

    return starElements;
  };

  return <div className="rate">{renderRatingStars(parseInt(rating, 10))}</div>;
};

export default Rating;
