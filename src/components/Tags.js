import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="container-title-host">
      <div className="tags">
        {/* map pour afficher chaque tag individuellement */}
        {tags.map((tag, index) => (
          <p className="tag" key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
