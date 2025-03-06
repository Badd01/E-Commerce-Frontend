// import { Link, useParams } from "react-router";
// import productsData from "../../../data/products.json";
// import RatingStar from "../../../components/RatingStar";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { RiArrowRightSLine } from "react-icons/ri";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const item = productsData.find((product) => product._id.toString() === id);

//   const handleAddToCart = () => {};
//   return (
//     <>
//       <section className="section_container bg-primary-light">
//         <h2 className="section_header">Single Product Page</h2>
//         <div className="section_subheader space-x-2 flex items-center justify-center">
//           <span className="hover:text-primary">
//             <Link to="/" className="capitalize">
//               home
//             </Link>
//           </span>
//           <RiArrowRightSLine />
//           <span className="hover:text-primary">
//             <Link to="/shop" className=" capitalize">
//               shop
//             </Link>
//           </span>
//           <RiArrowRightSLine />
//           <span className="hover:text-primary">{item.name}</span>
//         </div>
//       </section>

//       <section className="section_container mt-8">
//         <div className="flex flex-col items-center md:flex-row gap-8">
//           <div className="md:w-1/2 w-full">
//             <img
//               src={item.image}
//               alt="product image"
//               className="rounded-md w-full h-auto"
//             />
//           </div>
//           <div className="md:w-1/2 w-full">
//             <h3 className="text-2xl font-semibold mb-4 capitalize">
//               {item.name}
//             </h3>
//             <p className="text-xl text-primary mb-4">
//               ${item.price} {item.oldPrice && <s>${item.oldPrice}</s>}
//             </p>
//             <p className="text-gray-400 mb-4"> {item.description}</p>

//             <div>
//               <p className=" capitalize">
//                 <strong>Category: </strong>
//                 {item.category}
//               </p>
//               <p className=" capitalize">
//                 <strong>Color: </strong>
//                 {item.color}
//               </p>
//               <p className="flex gap-1 items-center">
//                 <strong>Rating: </strong>
//                 <RatingStar rating={item.rating} />
//               </p>
//             </div>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleAddToCart(item);
//               }}
//               className="mt-6 btn"
//             >
//               Add to Cart
//             </button>
//             <ToastContainer position="bottom-right" />
//           </div>
//         </div>
//       </section>

//       {/* review */}
//       <section className="section_container mt-8">
//         <p>REVIEW</p>
//       </section>
//     </>
//   );
// };

// export default SingleProduct;
