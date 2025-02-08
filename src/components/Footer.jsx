import React from "react";
import { AiFillTikTok, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SiShopee } from "react-icons/si";
import { RiMapPinFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="section_container footer_container">
      <div className="footer_col">
        <h4 className="uppercase"> contact info</h4>
        <p className="flex items-center">
          <span>
            <RiMapPinFill />
          </span>
          123 Dai Co Viet, Hai Ba Trung, Ha Noi
        </p>
        <p className="flex items-center">
          <span>
            <RiMailFill />
          </span>
          support@fashion.com
        </p>
        <p className="flex items-center">
          <span>
            <RiPhoneFill />
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

      <div className="footer_bar">
        <h4 className="uppercase">our links</h4>
        <div className="socials_grid text-5xl ">
          <a href="https://www.instagram.com">
            <span className="text-red-500">
              <AiFillInstagram />
            </span>
          </a>
          <a href="https://www.facebook.com">
            <span className="text-blue-500">
              <AiFillFacebook />
            </span>
          </a>
          <a href="https://www.tiktok.com">
            <span>
              <AiFillTikTok />
            </span>
          </a>
          <a href="https://shopee.vn" className="text-orange-500">
            <span>
              <SiShopee />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
