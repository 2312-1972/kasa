import React from "react";
import "../sass/main.css";
import Rent from "./Location";
import LogementsComponent from "./Habitations";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <div className="App">
     <Header/>

      <div className="banner">
        <Rent />
      </div>
      <div className="body-home">
        <LogementsComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
