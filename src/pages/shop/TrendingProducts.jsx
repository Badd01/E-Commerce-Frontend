import React, { useState } from "react";
import ProductCards from "./ProductCards";

//Test display data
import products from "../../data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <section className="section_container product_container">
      <h2 className="section_header">Trending Products</h2>
      <p className="section_subheader mb-10">Discover the Hottest Picks</p>

      <ProductCards products={products.slice(0, visibleProducts)} />

      {/* load more */}
      <div className="product_btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
