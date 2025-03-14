import { Link } from "react-router";
import images from "../../assets/images.js";

const Banner = () => {
  return (
    <div className="max-w-maxi mx-auto px-8 pt-8 rounded-b-xl bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold  uppercase">Accessories for Women</h1>
        <p>
          Discover the latest trends and high-quality accessories for women at
          affordable prices. Elevate your style with our latest collections!
        </p>
        <button className="bg-primary text-secondary font-semibold px-6 py-3 rounded-lg mt-4 hover:scale-105 transition">
          <Link to="/shop">Discover now</Link>
        </button>
      </div>

      <div className="mx-auto">
        <img className="max-w-[400px]" src={images.banner} alt="Banner image" />
      </div>
    </div>
  );
};

export default Banner;
