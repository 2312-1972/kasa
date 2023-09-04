import React from "react";
import "../sass/main.css";
import logoFooter from "../assets/LOGO_footer_desktop.png";

function Footer() {
  return (
   
      <footer className="app-footer">
       <img className="logo-footer" src={logoFooter} alt="logo-footer" /> 
        <h1 className="title-footer">© 2020 Kasa. All rights reserved</h1>
        
      </footer>
    
  );
}

export default Footer;
