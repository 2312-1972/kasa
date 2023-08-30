import React from "react";
import MaskAbout from "../assets/Mask Group about.png";
import "../sass/main.css";

function BannerAbout() {
  return (
    <div>
      <img className="mask" src={MaskAbout} alt="MaskAbout"></img>
    </div>
  );
}

export default BannerAbout;