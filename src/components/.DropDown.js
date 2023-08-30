import "../sass/main.css";
import vector from "../assets/Vector.png";
function BlockValeurs() {
  return (
    <div>
      <div className="valeurs">
        <p className="title-valeur">Fiabilité</p>
        <img src={vector} className="arrow" alt="arrow" />
      </div>
      <div className="valeurs">
        <p className="title-valeur">Service</p>
        <img src={vector} className="arrow" alt="arrow" />
      </div>
      <div className="valeurs">
        <p className="title-valeur">Respect</p>
        <img src={vector} className="arrow" alt="arrow" />
      </div>
      <div className="valeurs">
        <p className="title-valeur">Sécurité</p>
        <img src={vector} className="arrow" alt="arrow" />
      </div>
    </div>
  );
}

export default BlockValeurs;
