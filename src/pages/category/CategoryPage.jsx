import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useParams } from "react-router";
import ProductCards from "../shop/ProductCards";

import productsData from "../../data/products.json";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = productsData.filter(
      (product) => product.category === categoryName.toLowerCase()
    );

    setFilteredProducts(filtered);
  }, [categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="section_container bg-primary-light">
        <h2 className="section_header capitalize">{categoryName}</h2>
        <p className="section_subheader">
          Elevate your style with our latest collections!
        </p>
      </section>
      <div className="section_container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
