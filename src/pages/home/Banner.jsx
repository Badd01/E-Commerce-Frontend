import React from "react";
import { Link } from "react-router";
import images from "../../assets/images.js";

const Banner = () => {
  return (
    <div className="section_container header_container">
      <div className="header_content z-30">
        <h4 className="uppercase">up to 30% discount on</h4>
        <h1>Fashion</h1>
        <p>
          Discover trendy, high-quality, and affordable fashion for every
          occasion. Elevate your style with our latest collections!
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header_image">
        <img src={images.banner} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
