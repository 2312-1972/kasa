import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../assets/arrow left.png";
import arrowRight from "../assets/arrow right.png";

const SlideshowContainer = ({ picturesArray, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Utilisation de useState avec une valeur initiale de 0

  // Gestionnaire d'événement pour passer à l'image précédente
  const goToPreviousImage = () => {
    // Calcule le nouvel index de l'image précédente
    const newIndex =
      currentImageIndex === 0
        ? picturesArray.length - 1
        : currentImageIndex - 1;

    // Met à jour l'index de l'image actuelle
    setCurrentImageIndex(newIndex);
  };

  // Gestionnaire d'événement pour passer à l'image suivante
  const goToNextImage = () => {
    // Calcule le nouvel index de l'image suivante
    const newIndex =
      currentImageIndex === picturesArray.length - 1
        ? 0
        : currentImageIndex + 1;

    // Met à jour l'index de l'image actuelle
    setCurrentImageIndex(newIndex);
  };

  return (
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
  );
};

SlideshowContainer.propTypes = {
  picturesArray: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default SlideshowContainer;
