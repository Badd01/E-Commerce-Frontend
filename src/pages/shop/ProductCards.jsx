import React from "react";
import { Link } from "react-router";
import RatingStar from "../../components/RatingStar";

const ProductCards = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="product_card">
            <div className="relative">
              <Link to={`/shop/${product._id}`}>
                <img
                  src={product.image}
                  alt="product image"
                  className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300 rounded-md "
                />
              </Link>

              <div className="hover:block absolute top-3 right-3">
                <button>
                  <i className="ri-shopping-cart-line bg-primary p-1.5 text-white rounded-md hover:bg-primary-dark"></i>
                </button>
              </div>
            </div>

            {/* product description */}
            <div>
              <h4>{product.name}</h4>
              <p>
                ${product.price}{" "}
                {product?.oldPrice ? <s>${product.oldPrice}</s> : null}
                <RatingStar rating={product.rating} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCards;
