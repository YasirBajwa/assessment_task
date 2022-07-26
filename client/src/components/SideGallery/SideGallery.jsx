import React from "react";
import "./sideGallery.css";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";
import Image4 from "../../assets/img4.png";

const SideGallery = () => {
  return (
    <div>
      <div className="gallery__container">
        <section className="gallery__items">
          <img className="bottom" src={Image2} alt="Instagram" />
          <img className="bottom" src={Image4} alt="Instagram" />
          <img className="top" src={Image3} alt="Instagram" />
        </section>
      </div>
    </div>
  );
};

export default SideGallery;
