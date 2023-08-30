import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";

// import des routes et des éléments React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error404 from "./components/Error404";
import Carrousel from "./components/Carrousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home /> 
    {/* <About/>  */}
  </React.StrictMode>
);


//configuration des routes 
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} /> {/* Route vers la page d'accueil */}
      <Route path="/about" element={<About />} /> {/* Route vers About */}
      <Route path="/error" element={<Error404 />} /> {/* Route vers Error404 */}
      <Route path="/carrousel" element={<Carrousel />} /> {/* Route vers Carrousel */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
