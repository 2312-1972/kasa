import React from "react";
import { useLocation } from "react-router-dom";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // On récupère les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const cover = searchParams.get("cover");
  const situation = searchParams.get("location");
  const rating = searchParams.get("rating");
  const hostName = searchParams.get("hostName");
  const hostPicture = searchParams.get("hostPicture");
  const tags = searchParams.get("tags");

  // Utilisation la méthode `split` pour convertir la chaîne de tags en un tableau de tags
  const tagList = tags ? tags.split(",") : [];

  // Fonction pour générer les étoiles en fonction de la note (rating)
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
  return (
    <div className="carrousel">
      <div className="slideshow-container">
        <img src={cover} alt={title} />
      </div>
      <div className="container-title-host">
        {" "}
        <div className="container-location">
          <p className="carrousel-title"> {title}</p>
          <p className="carrousel-location">{situation}</p>
        </div>
        <div className="container-host">
          <p className="host"> {hostName}</p>
          <img className="host-picture" src={hostPicture} alt={hostName} />
        </div>
      </div>
      <div className="container-tags-rating">
        <div className="tags">
          {/*  map pour afficher chaque tag individuellement */}
          {tagList.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="rate">{renderRatingStars(parseInt(rating, 10))}</div>
      </div>
      <div>{/* <img src= {pictures} alt={title} /> */}</div>
    </div>
  );
};

export default Carrousel;
