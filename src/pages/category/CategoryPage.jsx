import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useParams } from "react-router";

import products from "../../data/products.json";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );
  }, []);
  return (
    <>
      <div>CategoryPage</div>
      <Footer />
    </>
  );
};

export default CategoryPage;
