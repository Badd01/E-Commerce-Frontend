import { Link, useParams } from "react-router";
// import RatingStar from "../../../components/RatingStar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { productsApi } from "../../../redux/api/productsApi";

const SingleProduct = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data, isLoading, error } = productsApi.useGetProductBySlugQuery(slug);
  console.log(data);

  const handleAddToCart = () => {
    console.log("add to cart");
  };
  if (isLoading) return <p className="text-xl font-semibold">Loading...</p>;
  if (error)
    return <p className="text-xl font-semibold">Error loading product!</p>;
  return (
    <>
      <section className="bg-gray-200 max-w-maxi mx-auto mt-8 rounded-md p-4">
        <h2 className="section_header">Single Product Page</h2>
        <div className="section_subheader space-x-2 flex items-center justify-center">
          <span className="hover:text-primary">
            <Link to="/">Home</Link>
          </span>
          <RiArrowRightSLine />
          <span className="hover:text-primary">
            <Link to="/shop">Shop</Link>
          </span>
          <RiArrowRightSLine />
          <span className="hover:text-primary">
            <Link to="/shop/new">New</Link>
          </span>
          <RiArrowRightSLine />
          <span className="hover:text-primary">{data.name}</span>
        </div>
      </section>

      <section className="section_container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 border  rounded-md">
            <img
              src={data.image}
              alt="product image"
              className="rounded-md w-full h-[350px] object-cover mx-auto hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4 capitalize">
              {data.name}
            </h3>
            <p className="text-3xl text-primary mb-4"> $ {data.price}</p>
            <p className="mb-4"> {data.description}</p>

            <div>
              <p>
                <strong>Category: </strong>
                {data.category}
              </p>
              <p>
                <strong>Tag: </strong>
                {data.tag}
              </p>
              <p>
                <strong>Color: </strong>
                {data.color}
              </p>
              <p>
                <strong>Year: </strong>
                {data.year}
              </p>
              {/* <p>
                <strong>Stock: </strong>
                {data.stock}
              </p> */}
              {/* <p className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStar rating={item.rating} />
              </p> */}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(data);
              }}
              className="mt-6 border text-white px-4 py-2 rounded-md bg-primary hover:scale-105 transition duration-300"
            >
              Add to Cart
            </button>
            <ToastContainer position="bottom-right" />
          </div>
        </div>
      </section>

      {/* review */}
      <section className="section_container mt-8">
        <p>REVIEW</p>
      </section>
    </>
  );
};

export default SingleProduct;
