import React from "react";
import { Link } from "react-router-dom";
import "../sass/main.css";
import Header from "./header"
import Footer from "./footer"
function Error404 (){
   
    return (
        <div className="app-404">
           <Header/> 
       <div className="error-section"> <h1 className="error-title">404</h1>
        <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
        
      </div><Link to="/" className="error-link">
        Retourner sur la page d’accueil
          </Link>
        <Footer/>
        </div>
    )
}
export default Error404;