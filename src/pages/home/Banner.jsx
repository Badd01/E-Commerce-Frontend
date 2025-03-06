import { Link } from "react-router";
import images from "../../assets/images.js";

const Banner = () => {
  return (
    <div className="max-w-maxi mx-auto px-8 pt-8 rounded-b-xl bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="text-center md:text-left space-y-4">
        <h4 className="uppercase text-secondary font-semibold text-lg">
          Giảm giá tới 30%
        </h4>
        <h1 className="text-4xl font-bold  uppercase">Phụ kiện phái nữ</h1>
        <p>
          Khám phá thời trang xu hướng, chất lượng cao và giá cả phải chăng cho
          mọi dịp. Nâng tầm phong cách của bạn với những bộ sưu tập mới nhất của
          chúng tôi!
        </p>
        <button className="bg-primary text-secondary font-semibold px-6 py-3 rounded-lg mt-4 hover:scale-105 transition">
          <Link to="/shop">Khám phá ngay</Link>
        </button>
      </div>

      <div className="mx-auto">
        <img className="max-w-[400px]" src={images.banner} alt="Banner image" />
      </div>
    </div>
  );
};

export default Banner;
