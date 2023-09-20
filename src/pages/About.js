
import "../sass/main.css";
import BannerAbout from "../components/BannerApropos";

import BlockValeurs from "../components/Valeurs";

function About() {
  return (
    <div className="app-about">
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
        <BlockValeurs />
      </div>
    </div>
  );
}

export default About;
