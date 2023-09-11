import React, { useState, useEffect } from 'react';

const EquipementsList = ({ equipements }) => {
  const [equipementsList, setEquipementsList] = useState([]);

  useEffect(() => {
    // Divisez la chaîne de texte en un tableau en utilisant la virgule comme délimiteur
    const parsedEquipements = equipements.split(',').map(item => item.trim());
    setEquipementsList(parsedEquipements);
  }, [equipements]); // Réagissez aux changements de la prop equipements

  return (
    <div>
      <ul>
        {equipementsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipementsList;
