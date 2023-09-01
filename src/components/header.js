import React from "react";
import "../sass/main.css";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-div-link">
          <Link to="/home" className="where">
            Accueil
          </Link>
          <Link to="/about" className="no-where">
            A Propos
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
