import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../sass/main.css";

function Header() {
  const { id } = useParams();

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-div-link">
          <NavLink
            exact
            to="/"
            className={`no-where ${id === undefined ? "active" : ""}`}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={`no-where ${id === "about" ? "active" : ""}`}
          >
            À Propos
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
