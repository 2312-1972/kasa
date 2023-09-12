import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";
import arrowRight from "../assets/arrow right.png";
import  arrowLeft from "../assets/arrow left.png";
import CollapseLogements from "./CollapseLogement";
import EquipementsList from "./Equipements";
import Tags from "./Tags";
import Host from "./Hosts";

const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // On récupère les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const situation = searchParams.get("location");
  const rating = searchParams.get("rating");
  // const hostName = searchParams.get("hostName");
  // const hostPicture = searchParams.get("hostPicture");
  // const tags = searchParams.get("tags");
  const description = searchParams.get("description");
  const equipements = searchParams.get("equipments");
  const pictures = searchParams.get("pictures");

  // Utilisation la méthode `split` pour convertir la chaîne de tags en un tableau de tags
  // const tagList = tags ? tags.split(",") : [];

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

  // Récupére les images du logement actuel depuis le tableau "pictures"
  const picturesArray = pictures ? pictures.split(",") : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gestionnaire d'événement pour passer à l'image précédente
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? picturesArray.length - 1 : prevIndex - 1
    );
  };

  // Gestionnaire d'événement pour passer à l'image suivante
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === picturesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Utilisation de  "useEffect" pour mettre à jour l'image actuelle lorsque le logement change
  useEffect(() => {
    setCurrentImageIndex(0); // Réinitialise l'index de l'image lorsqu'un nouveau logement est affiché
  }, [pictures]);

  return (
    <div className="carrousel">
      <div className="slideshow-container">
    {/* Condition pour afficher les conteneurs de flèches uniquement s'il y a plus d'une image */}
    {picturesArray.length > 1 && (
        <>
          <div className="container-arrow-left">
            <img
              className="arrow-left"
              src={arrowLeft}
              alt={arrowLeft}
              onClick={goToPreviousImage}
            />
          </div>
          <div className="container-arrow-right">
            <img
              className="arrow-right"
              src={arrowRight}
              alt={arrowRight}
              onClick={goToNextImage}
            />
          </div>
        </>
      )}

      {/* Affiche l'image actuelle en utilisant currentImageIndex */}
      <img src={picturesArray[currentImageIndex]} alt={title} />

    {/* Décompte des images en sens inverse */}
    {picturesArray.length > 1 && (
        <div className="countdown ">
          {picturesArray.length - currentImageIndex}/{picturesArray.length}
        </div>
      )}
   </div>

      <div className="container-title-host">
        <div className="container-location">
          <p className="carrousel-title"> {title}</p>
          <p className="carrousel-location">{situation}</p>
        </div>
        <div className="container-host">
          {/* <p className="host"> {hostName}</p>
          <img className="host-picture" src={hostPicture} alt={hostName} /> */}
          <Host/>
        </div>
      </div>
      <div className="container-tags-rating">
        <div className="tags">
           {/* map pour afficher chaque tag individuellement
          {tagList.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))} */}
          <Tags/>  
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
