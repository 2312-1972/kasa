import logo from "../assets/LOGO.png";
import "../sass/layout.css";
import logoFooter from "../assets/Size=Desktop.png";
import Rent from "./Location";
import CardsHome from "./CardsHome";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-div-link">
          <a className="where" href="App.js">
            Accueil
          </a>
          <a className="no-where" href="../public/apropos.html">
            A Propos
          </a>
        </div>
      </header>
      <div className="body-home">
        <Rent />
        <CardsHome />
      </div>
      <footer className="app-footer">
        <img src={logoFooter} alt="logo-footer" />
      </footer>
    </div>
  );
}

export default App;
