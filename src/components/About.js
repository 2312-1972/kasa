import React from "react";
import "../sass/main.css";
import BannerAbout from "./BannerApropos";
import Valeurs from "./Valeurs";
import Footer from "./footer";
import Header from "./header";

function About() {
  return (
    <div className="app-about">
      <Header />
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
        <Valeurs />
      </div>
      <Footer />
    </div>
  );
}
export default About;
