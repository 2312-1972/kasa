// import { Link } from 'react-router-dom';

import "../sass/main.css";
import logo from "../assets/LOGO.png";
import logoFooter from "../assets/Size=Desktop.png";
import BannerAbout from "./BannerApropos";
import Valeurs from "./Valeurs";

function About() {
  return (
    <div className="app-about">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div className="app-div-link">
          <a className="no-where" href="App.js">
            Accueil
          </a>
          <a className="where" href="../public/apropos.html">
            A Propos
          </a>
        </div> 
         {/* <div className="app-div-link">
  <Link to="/" className="where">
    Accueil
  </Link>
  <Link to="/about" className="no-where">
    A Propos
  </Link>
</div> */}
      </header>
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
       
        <Valeurs />
      </div>
      <footer className="app-footer">
        <img src={logoFooter} alt="logo-footer" />
      </footer>
    </div>
  );
}
export default About;
