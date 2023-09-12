

import React from "react";
import { useLocation } from "react-router-dom";


const Tags = () => {
const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tags = searchParams.get("tags");
 // Utilisation la méthode `split` pour convertir la chaîne de tags en un tableau de tags
 const tagList = tags ? tags.split(",") : [];
  return(

    <div className="container-tags-rating">
    <div className="tags">
      {/*  map pour afficher chaque tag individuellement */}
      {tagList.map((tag, index) => (
        <p className="tag" key={index}>
          {tag}
        </p>
      ))}
    </div>
    
  </div>
            )


}

export default Tags;



