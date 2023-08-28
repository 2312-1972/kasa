import logo from "../assets/LOGO.png";
import "../sass/layout.css";
import logoFooter from "../assets/Size=Desktop.png";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="app-div-link">
          <a
            className="where"
            href="App.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accueil
          </a>
          <a
            className="no-where"
            href="../public/apropos.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Propos
          </a>
        </div>
      </header>

      <footer>
        <img src={logoFooter} alt="logo-footer" />
      </footer>
    </div>
  );
}

export default App;
