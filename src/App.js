import React from "react";

import "./style/index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Carrousel from "./pages/Carrousel";
import Header from "./components/header";
import Footer from "./components/footer";

//configuration des routes
function App() {
  return (
    <>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Route vers la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route vers About */}
        <Route path="/carrousel" element={<Carrousel />} />{" "}
        {/*   Route vers Carrousel*/}
        <Route path="*" element={<Error404 />} />{" "}
        {/* Route générique pour gérer les erreurs 404 */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
