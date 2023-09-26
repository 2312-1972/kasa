import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowRight from "../assets/arrow right.png";
import arrowLeft from "../assets/arrow left.png";
//import CollapseLogements from "../components/CollapseLogement";
//import CollapseEquipements from "../components/CollapseEquipements";
import Title from "../components/Title";
import Tags from "../components/Tags";
import Hosts from "../components/Hosts";
import Rating from "../components/Rating";
import logementsData from "../components/logements.json";
import Error404 from "./Error404";
import Collapse from "../components/collapse";
const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  // Vérification si l'ID correspond à un logement
  const logement = logementsData.find((logement) => logement.id === id);

  const [openCollapsibleCount, setOpenCollapsibleCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let picturesArray = [];
  let title = "";
  let description = "";
  let equipments = "";
  let hostName = "";
  let hostPicture = "";
  let situation = "";
  let tags = "";
  let rating = "";
  // Mise à jour des variables si un logement est trouvé
  if (logement) {
    picturesArray = logement.pictures;
    title = logement.title;
    description = logement.description;
    equipments = logement.equipments;
    hostName = logement.host.name;
    hostPicture = logement.host.picture;
    situation = logement.location;
    tags = logement.tags;
    rating = logement.rating;
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

  //liste des équipements pour affichage sous forme de liste dans le collapse
  let equipmentList = [];
  // on s'assure  que equipments est un tableau
  if (Array.isArray(equipments)) {
    // Utilisation de  la méthode join pour convertir le tableau en une chaîne de caractères avec des virgules
    const equipmentsString = equipments.join(", ");

    // Utilisation de la méthode split pour diviser la chaîne de caractères en une liste d'équipements
    equipmentList = equipmentsString.split(",").map((equipment, index) => (
      <li className="ul" key={index}>
        {equipment.trim()}
      </li>
    ));
  } //  "trim"Supprime les espaces blancs de début et de fin et les caractères de fin de ligne d'une chaîne.

  if (!logement) {
    // Si l'ID n'existe pas, redirigez vers Error404
    return <Error404 />;
  }

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
                onClick={goToNextImage}
              />
            </div>
            <div className="container-arrow-right">
              <img
                className="arrow-right"
                src={arrowRight}
                alt={arrowRight}
                onClick={goToPreviousImage}
              />
            </div>
          </>
        )}

        {/* Affiche l'image actuelle en utilisant currentImageIndex */}
        <img src={picturesArray[currentImageIndex]} alt={title} />

        {/* Décompte des images */}
        {picturesArray.length > 1 && (
          <div className="countdown ">
            {picturesArray.length > 1 && (
              <div>
                {currentImageIndex + 1}/{picturesArray.length}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="container-title-host">
        <div className="container-location">
          <Title title={title} location={situation} />
        </div>
        <div className="tags">
          <Tags tags={tags} />
        </div>
      </div>
      <div className="container-tags-rating">
        <div className="container-host">
          <Hosts hostName={hostName} hostPicture={hostPicture} />
        </div>
        <Rating rating={rating} />
      </div>
      <div className="collapse-logement">
        <Collapse
          title="Description"
          text={description}
          onCollapsibleToggle={handleCollapsibleToggle}
          valeursBlockClassName="valeurs-block-logements"
          valeursClassName="logement-valeur"
          collapseContentClassName="collapse-content-logements"
        />
       <Collapse
          title="Equipements"
          text={equipmentList}
          onCollapsibleToggle={handleCollapsibleToggle}
          valeursBlockClassName="valeurs-block-logements"
          valeursClassName="logement-valeur"
          collapseContentClassName="collapse-content-logements"
        />
      </div>
    </div>
  );
};

export default Carrousel;
