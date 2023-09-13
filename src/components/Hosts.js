import React from "react";

const Hosts = ({ hostName, hostPicture }) => {
  return (
    <div className="container-host">
      <p className="host"> {hostName}</p>
      <img className="host-picture" src={hostPicture} alt={hostName} />
    </div>
  );
};

export default Hosts;
