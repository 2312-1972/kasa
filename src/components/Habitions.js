import "../sass/main.css";
import logementsData from "./logements.json";

const LogementsComponent = () => {
  return (
    <div className="gallery">
      {logementsData.map((logement, index) => (
        <div key={index} className="gallery-item">
          <img src={logement.cover} alt={`Logement ${index + 1}`} />
          <p>{logement.title}</p>
        </div>
      ))}
    </div>
  );
};

export default LogementsComponent;
