import React, { useState } from "react";
import "../sass/main.css";
import vector from "../assets/Vector.png";

function Collapse({ title, text, onCollapsibleToggle, valeursBlockClassName, valeursClassName, collapseContentClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    onCollapsibleToggle(!isOpen);
  };

  return (
    <div className={`valeurs-block ${valeursBlockClassName}`}>
      <div className={`valeurs ${valeursClassName}`}>
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
        <div className={`collapse-content ${collapseContentClassName}`}>
          <p className="text-collapse">{text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
