import React from "react";
import { useLocation } from "react-router-dom";


const Host = () => {
const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hostName = searchParams.get("hostName");
  const hostPicture = searchParams.get("hostPicture");

return(

<div className="container-host">
          <p className="host"> {hostName}</p>
          <img className="host-picture" src={hostPicture} alt={hostName} />
        </div>
)


}

export default Host;