import mask from "../assets/Mask Group.png";
import "../sass/main.css";

function Location() {
  return (
    <div>
      <img className="mask" src={mask} alt="mask"></img>
      <h1 className="title-banner">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Location;
