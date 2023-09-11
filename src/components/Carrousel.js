import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";
import arrowLeft from "../assets/arrow left.png";
import arrowRight from "../assets/arrow right.png";
import CollapseLogements from "./CollapseLogement";
import EquipementsList from "./Equipements";

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
  const description = searchParams.get("description");
  const equipements = searchParams.get("equipments");
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
  // État pour suivre le nombre de collapsibles ouverts
  const [openCollapsibleCount, setOpenCollapsibleCount] = useState(0);

  const handleCollapsibleToggle = (isOpen) => {
    if (isOpen) {
      setOpenCollapsibleCount(openCollapsibleCount + 1);
    } else {
      setOpenCollapsibleCount(openCollapsibleCount - 1);
    }
  };

  return (
    <div className="carrousel">
      <div className="slideshow-container">
        <img src={cover} alt={title} />
        <img className="arrow-left" src={arrowLeft} alt={arrowLeft} />
        <img className="arrow-right" src={arrowRight} alt={arrowRight} />
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
      <div className="collapse-logement">
        <CollapseLogements
          title="Description"
          text={description}
          onCollapsibleToggle={handleCollapsibleToggle}
        />
        <CollapseLogements
          title="Equipements"
          text={<EquipementsList equipements={equipements} />}
          onCollapsibleToggle={handleCollapsibleToggle}
        />
      </div>
    </div>
  );
};

export default Carrousel;
