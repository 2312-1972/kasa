import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../sass/main.css";

function Header() {
  const location = useLocation();

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-div-link">
          <NavLink
            exact // Utilisation de  l'attribut "exact" pour correspondre exactement à la route "/"
            to="/"
            className={`no-where ${location.pathname === "/" ? "active" : ""}`}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={`no-where ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            À Propos
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
