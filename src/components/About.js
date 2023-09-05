// import React, { useState } from "react";
import "../sass/main.css";
import BannerAbout from "./BannerApropos";
import Footer from "./footer";
import Header from "./header";
import BlockValeurs from "./Valeurs";

function About() {
  

  return (
    <div className="app-about">
      <Header />
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
        <BlockValeurs  />
      </div>
      <Footer />
    </div>
  );
}

export default About;
