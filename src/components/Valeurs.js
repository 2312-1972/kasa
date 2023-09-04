
import "../sass/main.css";
import React, { useState } from "react";
import Collapse from "./collapse";
function BlockValeurs() {
  // État pour suivre le nombre de collapsibles ouverts
  const [openCollapsibleCount, setOpenCollapsibleCount] = useState(0);

  // Fonction pour mettre à jour le nombre de collapsibles ouverts
  const handleCollapsibleToggle = (isOpen) => {
    if (isOpen) {
      setOpenCollapsibleCount(openCollapsibleCount + 1);
    } else {
      setOpenCollapsibleCount(openCollapsibleCount - 1);
    }
  };

return (
    <div className="valors-block">
      <Collapse
        title="Fiabilité"
        text="Les annonces postées sur Kasa garantissent en fiabilité totale. Les photo sont conformes aux logements, et 
    toutes les informations sont régulièrement vérifiées par nos équipes."
    onCollapsibleToggle={handleCollapsibleToggle} // Passer la fonction de gestion de l'état
      />
      
      <Collapse
        title="Service"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
     entraînera une exclusion de notre plateforme."
     onCollapsibleToggle={handleCollapsibleToggle} // Passer la fonction de gestion de l'état
      />
      
      <Collapse
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage
     entraînera une exclusion de notre plateforme. "
     onCollapsibleToggle={handleCollapsibleToggle} // Passer la fonction de gestion de l'état
      />
      
      <Collapse
        title="Sécurité"
        text="La sécurité est la priorité de Kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
    correspond aux critères de sécurité établis par nos services .En laisant une note aussi bien à l'hôte qu'au
    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons
    également des ateliers sur la sécurité domestique pour nos hôtes. "
    onCollapsibleToggle={handleCollapsibleToggle} // Passer la fonction de gestion de l'état
      />
      
    </div>
  );
}

export default BlockValeurs;
