import React from "react";
import { useLocation } from "react-router-dom";

const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // On récupére les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const cover = searchParams.get("cover");
  const situation =searchParams.get("location")
  const rating =searchParams.get("rating")
  //const pictures =searchParams.get("pictures")
  const hostName =searchParams.get ("hostName")
  const hostPicture =searchParams.get("hostPicture")
  return (
    <div>  {/* Affiche les informations utiliser du logement ici */}
      <img src={cover} alt={title} />
      <p> {title}</p>
      <p>{situation}</p>
      <p>{rating}</p>
      <div>
       {/* <img src= {pictures} alt={title} /> */}
      </div>
    <div>
    {hostName}
      <img src={hostPicture} alt= {hostName}/>
    
    </div>
    </div>
  );
};

export default Carrousel;
