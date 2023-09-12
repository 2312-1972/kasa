import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowRight from "../assets/arrow right.png";
import arrowLeft from "../assets/arrow left.png";
import CollapseLogements from "../components/CollapseLogement";
import CollapseEquipements from "../components/CollapseEquipements";
import EquipementsList from "../components/Equipements";
import Title from "../components/Title";
import Tags from "../components/Tags";
import Host from "../components/Hosts";
import Rating from "../components/Rating";
import logementsData from "../components/logements.json";

const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  // Vérifiez si l'ID correspond à un logement
  const logement = logementsData.find((logement) => logement.id === id);

  // Assurez-vous de déclarer les variables nécessaires
  const [openCollapsibleCount, setOpenCollapsibleCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let picturesArray = [];
  let title = "";
  let description = "";
  let equipements = "";

  // Mettez à jour les variables si un logement est trouvé
  if (logement) {
    picturesArray = logement.pictures;
    title = logement.title;
    description = logement.description;
    equipements = logement.equipements;
  }

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

  // Gestionnaire d'événement pour les collapsibles
  const handleCollapsibleToggle = (isOpen) => {
    if (isOpen) {
      setOpenCollapsibleCount(openCollapsibleCount + 1);
    } else {
      setOpenCollapsibleCount(openCollapsibleCount - 1);
    }
  };

  // Utilisation de "useEffect" pour mettre à jour l'image actuelle lorsque le logement change
  useEffect(() => {
    setCurrentImageIndex(0); // Réinitialise l'index de l'image lorsqu'un nouveau logement est affiché
  }, [id]);


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