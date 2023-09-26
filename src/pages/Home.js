import React from "react";
import "../sass/main.css";
import Rent from "../components/Location";
import LogementsComponent from "../components/LogementsComponent";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <Rent />
      </div>
      <div className="body-home">
        <LogementsComponent />
      </div>
    </div>
  );
}

export default App;
