import React from "react";

import "./style/index.css";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Error404 from "./components/Error404";
import Carrousel from "./components/Carrousel";


//configuration des routes 
function App () {
    return(
      <Routes>
      <Route path="/" element={<Home />} /> {/* Route vers la page d'accueil */}
      <Route path="/about" element={<About />} /> {/* Route vers About */}
     <Route path="/error" element={<Error404 />} />  {/*   Route vers Error404 */}
    <Route path="/carrousel" element={<Carrousel />}/> {/*  /> Route vers Carrousel*/}
    </Routes> 
      
    )
}

 export default App;