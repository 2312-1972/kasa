import React, { useState, useEffect } from 'react';

const EquipementsList = ({ equipements }) => {
  const [equipementsList, setEquipementsList] = useState([]);

  useEffect(() => {
    // Divise la chaîne de texte en un tableau en utilisant la virgule comme délimiteur
    const parsedEquipements = equipements.split(',').map(item => item.trim());
    setEquipementsList(parsedEquipements);
  }, [equipements]); 

  return (
    <div>
      <ul>
        {equipementsList.map((item, index) => (
          <li className='ul' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipementsList;
