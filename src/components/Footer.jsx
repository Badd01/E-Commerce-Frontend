import { AiFillTikTok, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SiShopee } from "react-icons/si";
import { RiMapPinFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-dark-2 text-white py-2 mt-8">
      <div className="font-medium max-w-maxi mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-4 pl-2">
        <div>
          <h4 className="uppercase mb-4 text-primary font-semibold text-xl ">
            Ecomm.
          </h4>
          <p className="font-semibold text-sm">
            With Ecomm, make every moment special,
            <span className="font-semibold italic block text-primary mt-1">
              Ecomm - Fashion for every moment.
            </span>
          </p>
        </div>

        <div>
          <h4 className="uppercase mb-4 text-primary font-semibold text-xl ">
            Contact
          </h4>
          <p className="flex capitalize items-center mb-2 gap-1">
            <span className="text-primary text-xl">
              <RiMapPinFill />
            </span>
            1 Dai Co Viet, Hai Ba Trung, Ha Noi
          </p>
          <p className="flex  items-center mb-2 gap-1">
            <span className="text-primary text-xl">
              <RiMailFill />
            </span>
            support@ecomm.com
          </p>
          <p className="flex items-center mb-2 gap-1">
            <span className="text-primary text-xl">
              <RiPhoneFill />
            </span>
            0123456789
          </p>
        </div>

        <div>
          <h4 className="uppercase mb-4 text-primary font-semibold text-xl ">
            Support
          </h4>
          <Link className="block mb-2 capitalize" to="/">
            Terms of Service
          </Link>
          <Link className="block mb-2 capitalize" to="#">
            Return Policy
          </Link>
          <Link className="block mb-2 capitalize" to="#">
            Warranty Policy
          </Link>
        </div>

        <div>
          <h4 className="uppercase mb-4  text-primary font-semibold text-xl ">
            Our Stores
          </h4>
          <div className="grid grid-cols-2 gap-4 text-5xl ">
            <Link
              className="hover:text-red-500 hover:scale-120 mr-auto  transition duration-300"
              to="https://www.instagram.com"
            >
              <AiFillInstagram />
            </Link>
            <Link
              className="hover:text-blue-500 hover:scale-120 mr-auto  transition duration-300"
              to="https://www.facebook.com"
            >
              <AiFillFacebook />
            </Link>
            <Link
              className="hover:text-black hover:scale-120 mr-auto transition duration-300"
              to="https://www.tiktok.com"
            >
              <AiFillTikTok />
            </Link>
            <Link
              className="hover:text-orange-500 hover:scale-120 mr-auto  transition duration-300"
              to="https://shopee.vn"
            >
              <SiShopee />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-2">
        <p className="text-primary text-center">@Copyright 2025 by Ecomm.</p>
      </div>
    </footer>
  );
};

export default Footer;
