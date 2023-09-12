import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import starActive from "../assets/star-active.png";
// import starInactive from "../assets/star-inactive.png";
import arrowRight from "../assets/arrow right.png";
import  arrowLeft from "../assets/arrow left.png";
import CollapseLogements from "./CollapseLogement";
import CollapseEquipements from "./CollapseEquipements"
import EquipementsList from "./Equipements";
import Title from "./Title";
import Tags from "./Tags";
import Host from "./Hosts";
import Rating from "./Rating"
const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // On récupère les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const equipements = searchParams.get("equipments");
  const pictures = searchParams.get("pictures");

  
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
          <Title/>
         </div>
        <div className="container-host">
          <Host/>
        </div>
      </div>
      <div className="container-tags-rating">
        <div className="tags">
         <Tags/>  
        </div>
        <Rating/>
       </div>
      <div className="collapse-logement">
        <CollapseLogements
          title="Description"
          text={description}
          onCollapsibleToggle={handleCollapsibleToggle}
        />
        <CollapseEquipements
          title="Equipements"
          text={<EquipementsList equipements={equipements} />}
          onCollapsibleToggle={handleCollapsibleToggle}
        />
      </div>
    </div>
  );
};

export default Carrousel;
