// import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleProductCard from "../shop/productDetails/SingleProductCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productsApi } from "../../redux/api/productsApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewestProductData } from "../../redux/features/productsSlice";

const NewestProducts = () => {
  const { data, error } = productsApi.useGetProductsQuery({
    page: 1,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  const { newestProductData } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setNewestProductData(data));
      sessionStorage.setItem("newestProducts", JSON.stringify(data));
    }
  }, [data, dispatch]);

  const settings = {
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };

  if (!newestProductData)
    return <p className="max-w-maxi text-xl font-semibold">Loading...</p>;
  if (error)
    return (
      <p className="max-w-maxi text-xl font-semibold">
        Error loading products!
      </p>
    );

  return (
    <section className="max-w-maxi mx-auto mt-8">
      <h4 className="text-center max-w-maxi mx-auto mt-4 py-4 bg-dark-2 rounded-xl font-bold text-xl text-primary">
        Newest Products
      </h4>
      <div className="mt-4 ">
        <Slider {...settings}>
          {newestProductData.data.map((item, index) => (
            <SingleProductCard key={index} data={item} isOld={false} />
          ))}
        </Slider>
        <ToastContainer position="bottom-right" />
      </div>
    </section>
  );
};

export default NewestProducts;
