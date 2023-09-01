import React from "react";
import "../sass/main.css";
import logoFooter from "../assets/Size=Desktop.png";

function Footer() {
  return (
    <div>
      <footer className="app-footer">
        <img src={logoFooter} alt="logo-footer" />
      </footer>
    </div>
  );
}

export default Footer;
