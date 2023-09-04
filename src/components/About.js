import React, { useState, useLayoutEffect } from "react";
import "../sass/main.css";
import BannerAbout from "./BannerApropos";
import Footer from "./footer";
import Header from "./header";
import BlockValeurs from "./Valeurs";

function About() {
  const [openCollapsibleCount, setOpenCollapsibleCount] = useState(0);

  const handleCollapsibleToggle = (isOpen) => {
    if (isOpen) {
      setOpenCollapsibleCount(openCollapsibleCount + 1);
    } else {
      setOpenCollapsibleCount(openCollapsibleCount - 1);
    }
  };

  useLayoutEffect(() => {
    const footer = document.querySelector(".app-footer");
    if (footer) {
      const marginTop = openCollapsibleCount * 20;
      footer.style.marginTop = `${marginTop}px`;
    }
  }, [openCollapsibleCount]);

  return (
    <div className="app-about">
      <Header />
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
        <BlockValeurs onCollapsibleToggle={handleCollapsibleToggle} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
