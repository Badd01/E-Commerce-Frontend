import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleProductCard from "./productDetails/SingleProductCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Test display data
import productsData from "../../data/products.json";

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const specials = productsData.filter((product) => product.rating >= 4.0);
    setTrendingProducts(specials);
  }, []);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="section_container">
      <h2 className="section_header">Trending Products</h2>
      <p className="section_subheader mb-10">Discover the Hottest Picks</p>

      <div className="slider-container">
        <Slider {...settings}>
          {trendingProducts.map((item, index) => (
            <SingleProductCard key={index} product={item} cart={false} />
          ))}
        </Slider>
        <ToastContainer position="bottom-right" />
      </div>
    </section>
  );
};

export default TrendingProducts;
