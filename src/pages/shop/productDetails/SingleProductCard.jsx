// import { Link } from "react-router";

// import RatingStar from "../../../components/RatingStar";
// import { RiShoppingCartLine } from "react-icons/ri";

// const SingleProductCard = ({ product }) => {
//   const handleAddToCart = () => {};
//   return (
//     <div className="product_card_content">
//       <div className="relative">
//         <Link to={`/shop/${product._id}`}>
//           <img
//             src={product.image}
//             alt="product image"
//             className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300 rounded-md "
//           />
//         </Link>

//         <div className="hover:block absolute top-3 right-3">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleAddToCart(product);
//             }}
//             className="bg-primary p-1 text-white rounded-md hover:bg-primary-dark"
//           >
//             <RiShoppingCartLine />
//           </button>
//         </div>
//       </div>

//       {/* product description */}
//       <div>
//         <h4>{product.name}</h4>
//         <p>${product.price}</p>
//         <p>
//           <RatingStar rating={product.rating} />
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleProductCard;
