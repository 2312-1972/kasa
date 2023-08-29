import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Error404 from "./components/Error404";
import FicheLogement from "./components/FicheLogement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error404 />} />
      <Route path="/fiche-logement" element={<FicheLogement />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
