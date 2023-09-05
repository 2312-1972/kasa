import React, { useState } from "react";
import "../sass/main.css";
import vector from "../assets/Vector.png";

function Collapse({ title, text, onCollapsibleToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    onCollapsibleToggle(!isOpen);
  };

  const valeursStyle = {
    width: "1024px",
    height: "52px",
  };

  return (
    <div className="valeurs-block">
      <div className="valeurs" style={valeursStyle}>
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
        <div className="collapse-content">
          <p className="text-collapse">{text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
