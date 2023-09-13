import React from "react";
// import { useLocation } from "react-router-dom";

const Title = ({title,location}) => {
 

  return (
    <div className="container-location">
      <p className="carrousel-title"> {title}</p>
      <p className="carrousel-location">{location}</p>
    </div>
  );
};

export default Title;
