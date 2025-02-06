import React, { useState } from "react";
import Footer from "../../components/Footer";
import ProductCards from "../shop/ProductCards";
import productsData from "../../data/products.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase() || null;

    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <section className="section_container bg-primary-light">
        <h2 className="section_header capitalize">Search Products</h2>
        <p className="section_subheader">
          Elevate your style with our latest collections!
        </p>
      </section>

      <section className="section_container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Search for products ..."
            value={searchQuery}
            className="w-full max-w-4xl p-2 border rounded-sm"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="w-full cursor-pointer md:w-auto py-2 px-8 bg-primary text-white rounded-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <ProductCards products={filteredProducts} />
      </section>
      <Footer />
    </>
  );
};

export default Search;
