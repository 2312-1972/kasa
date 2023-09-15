import React, { useState } from "react";
import "../sass/main.css";
import vector from "../assets/Vector.png";

function CollapseLogements({ title, text, onCollapsibleToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    onCollapsibleToggle(!isOpen);
  };

  return (
    <div className="valeurs-block-logements">
      <div className="logement-valeur">
        <p className="title-valeur">{title}</p>
        <img
          src={vector}
          className="arrow"
          alt="arrow"
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          onClick={toggleCollapse}
        />
      </div>
      {isOpen && (
        <div className="collapse-content-logements">
          <p className="text-collapse">{text}</p>
        </div>
      )}
    </div>
  );
}

export default CollapseLogements;
