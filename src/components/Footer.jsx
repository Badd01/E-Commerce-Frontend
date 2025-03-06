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
            Thời trang ecomm.
          </h4>
          <p className="font-semibold text-sm">
            Cùng Ecomm. biến từng khoảnh khắc trong cuộc sống trở nên đặc biệt,
            để bạn luôn tự tin và tỏa sáng!
            <span className="font-semibold italic block text-primary mt-1">
              Ecomm.-Thời trang cho mọi khoảnh khắc.
            </span>
          </p>
        </div>

        <div>
          <h4 className="uppercase mb-4 text-primary font-semibold text-xl ">
            liên hệ
          </h4>
          <p className="flex capitalize items-center mb-2 gap-1">
            <span className="text-primary text-xl">
              <RiMapPinFill />
            </span>
            1 đại cồ việt, hai bà trưng, hà nội
          </p>
          <p className="flex  items-center mb-2 gap-1">
            <span className="text-primary text-xl">
              <RiMailFill />
            </span>
            cskh@ecomm.com
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
            hỗ trợ
          </h4>
          <Link className="block mb-2 capitalize" to="/">
            chính sách mua hàng
          </Link>
          <Link className="block mb-2 capitalize" to="#">
            chính sách đổi trả
          </Link>
          <Link className="block mb-2 capitalize" to="#">
            chính sách bảo hành
          </Link>
          <Link className="block mb-2 capitalize" to="#">
            điều khoản dịch vụ
          </Link>
        </div>

        <div>
          <h4 className="uppercase mb-4 text-primary font-semibold text-xl ">
            Cửa hàng
          </h4>
          <div className="grid grid-cols-2 gap-4 text-5xl ">
            <Link
              className="hover:text-red-500 hover:scale-120 mr-auto transition duration-300"
              to="https://www.instagram.com"
            >
              <AiFillInstagram />
            </Link>
            <Link
              className="hover:text-blue-500 hover:scale-120 mr-auto transition duration-300"
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
              className="hover:text-orange-500 hover:scale-120 mr-auto transition duration-300"
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
