import { Link } from "react-router";
import RatingStar from "../../../components/RatingStar";
import { RiShoppingBag2Fill } from "react-icons/ri";

const SingleProductCard = ({ data, isOld }) => {
  const handleAdd = () => {
    console.log("add");
  };
  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="relative mx-auto border-2 border-gray-300 rounded-md">
        <Link to={`/shop/new/${data.products.slug}`}>
          <img
            src={data.product_images.imageUrl}
            alt="product image"
            className="max-w-60 object-cover hover:scale-105 transition-all duration-300 rounded-md"
          />
        </Link>

        <button
          onClick={handleAdd}
          className="absolute top-2 right-2 bg-primary hover:bg-secondary transition-all duration-300 text-white p-2 rounded-md"
        >
          <RiShoppingBag2Fill />
        </button>
      </div>
      {/* product description */}

      <div className=" mx-auto text-center">
        <h4 className=" font-semibold text-xl px-5">{data.products.name}</h4>
        <p className="text-primary font-semibold text-xl">
          ${data.products.price}
        </p>
        {isOld && (
          <p>
            <RatingStar rating={data.products.rating} />
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleProductCard;
