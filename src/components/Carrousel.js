import React from "react";
import { useLocation } from "react-router-dom";

const Carrousel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // On récupère les données du logement depuis les paramètres d'URL
  const title = searchParams.get("title");
  const cover = searchParams.get("cover");
  const situation = searchParams.get("location");
  const rating = searchParams.get("rating");
  const hostName = searchParams.get("hostName");
  const hostPicture = searchParams.get("hostPicture");
  const tags = searchParams.get("tags");

  // Utilisez la méthode `split` pour convertir la chaîne de tags en un tableau de tags
  const tagList = tags ? tags.split(",") : [];

  return (
    <div className="carrousel">
      <div className="slideshow-container">
        <img src={cover} alt={title} />
      </div>
      <div className="container-title-host">
        {" "}
        <div className="container-location">
          <p className="carrousel-title"> {title}</p>
          <p className="carrousel-location">{situation}</p>
        </div>
        <div className="container-host">
          <p className="host"> {hostName}</p>
          <img className="host-picture" src={hostPicture} alt={hostName} />
        </div>
      </div>
      <div className="container-tags-rating">
        <div className="tags">
          {/*  map pour afficher chaque tag individuellement */}
          {tagList.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="rate">
          <p>{rating}</p>
        </div>
      </div>
      <div>{/* <img src= {pictures} alt={title} /> */}</div>
    </div>
  );
};

export default Carrousel;
