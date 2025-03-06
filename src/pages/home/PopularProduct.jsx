// import { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import SingleProductCard from "../shop/productDetails/SingleProductCard";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// //Test display data
// import productsData from "../../data/products.json";

// const PopularProducts = () => {
//   const [trendingProducts, setTrendingProducts] = useState([]);
//   useEffect(() => {
//     const specials = productsData.filter((product) => product.rating >= 4.0);
//     setTrendingProducts(specials);
//   }, []);
//   const settings = {
//     speed: 3000,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="max-w-maxi mx-auto">
//       <h4 className="text-center max-w-maxi mx-auto mt-8 py-4 bg-dark-2 rounded-xl font-bold text-xl text-primary">
//         Sản phẩm mới nhất
//       </h4>
//       <div className="mt-4 overflow-hidden">
//         <Slider {...settings}>
//           {trendingProducts.map((item, index) => (
//             <SingleProductCard key={index} product={item} cart={false} />
//           ))}
//         </Slider>
//         <ToastContainer position="bottom-right" />
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;
