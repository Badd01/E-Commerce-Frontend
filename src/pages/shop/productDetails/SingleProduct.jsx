import React from "react";
import { Link, useParams } from "react-router";

import productsData from "../../../data/products.json";
import RatingStar from "../../../components/RatingStar";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <>
      <section className="section_container bg-primary-light">
        <h2 className="section_header capitalize">single product page</h2>
        <div className="section_subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/" className="capitalize">
              home
            </Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop" className=" capitalize">
              shop
            </Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">shop</span>
        </div>
      </section>

      <section className="section_container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product ima"
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4 capitalize">
              product name
            </h3>
            <p className="text-xl text-primary mb-4">
              $100 <s>$130</s>
            </p>
            <p className="text-gray-400 mb-4"> product description</p>

            <div>
              <p>
                <strong>Category:</strong> test
              </p>
              <p>
                <strong>Color:</strong> test
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStar rating={"4"} />
              </div>
            </div>

            <button className="mt-6 btn">Add to Cart</button>
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
