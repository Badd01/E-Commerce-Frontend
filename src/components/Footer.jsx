import React from "react";

const Footer = () => {
  return (
    <footer className="section_container footer_container">
      <div className="footer_col">
        <h4 className="uppercase"> contact info</h4>
        <p>
          <span>
            <i className="ri-map-pin-fill"></i>
          </span>
          123 Dai Co Viet, Hai Ba Trung, Ha Noi
        </p>
        <p>
          <span>
            <i className="ri-mail-fill"></i>
          </span>
          support@fashion.com
        </p>
        <p>
          <span>
            <i className="ri-phone-fill"></i>
          </span>
          (+84) 123456789
        </p>
      </div>

      <div className="footer_col">
        <h4 className="uppercase">company</h4>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Work With Us</a>
        <a href="/">Our BLogs</a>
        <a href="/">Terms & Conditions</a>
      </div>

      <div className="footer_col">
        <h4 className="uppercase">useful link</h4>
        <a href="/">Help</a>
        <a href="/">Track your order</a>
        <a href="/">Men</a>
        <a href="/">Women</a>
      </div>

      <div className="footer_col">
        <h4 className="uppercase">our socials</h4>
        <div className="socials_grid">
          <a href="/">
            <span>
              <i className="ri-instagram-fill text-5xl text-red-500"></i>
            </span>
          </a>
          <a href="/">
            <span>
              <i className="ri-facebook-box-fill text-blue-700 text-5xl"></i>
            </span>
          </a>
          <a href="/">
            <span>
              <i className="ri-tiktok-fill text-5xl text-black"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
