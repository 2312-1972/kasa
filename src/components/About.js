// import React, { useState } from "react";
import "../sass/main.css";
import BannerAbout from "./BannerApropos";

import BlockValeurs from "./Valeurs";

function About() {
  return (
    <div className="app-about">
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
        <BlockValeurs />
      </div>
    </div>
  );
}

export default About;
