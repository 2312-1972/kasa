
// import { Link } from 'react-router-dom';


import logo from "../assets/LOGO.png";
import "../sass/main.css";
import logoFooter from "../assets/Size=Desktop.png";
import Rent from "./Location";
import LogementsComponent from "./Habitations";
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="app-div-link">
          <a className="where" href="App.js">
            Accueil
          </a>
          <a className="no-where" href="./About.js">
            A Propos
          </a>
        </div>  
        {/* <div className="app-div-link">
  <Link to="/home" className="where">
    Accueil
  </Link>
  <Link to="/about" className="no-where">
    A Propos
  </Link>
</div>  */}

      </header>
      <div className="banner">
        <Rent />
      </div>

      <div className="body-home">
        <LogementsComponent />
      </div>

      <footer className="app-footer">
        <img src={logoFooter} alt="logo-footer" />
      </footer>
    </div>
  );
}

export default App;
