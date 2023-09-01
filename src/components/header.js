import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../sass/main.css";

function Header() {
  const location = useLocation();

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-div-link">
          <Link to="/" className={`no-where ${location.pathname === '/' ? 'active' : ''}`}>
            Accueil
          </Link>
          <Link to="/about" className={`no-where ${location.pathname === '/about' ? 'active' : ''}`}>
            À Propos
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;

