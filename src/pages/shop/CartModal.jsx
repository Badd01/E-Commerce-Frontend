import React from "react";
import OrderSummary from "./OrderSummary";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";

const CartModal = ({ products, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleQuantity = (type, id) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };

  return (
    <div
      className={`cart_container ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`cart_content ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              onClick={() => onClose()}
              className="hover:scale-115 transition-all duration-300"
            >
              <i className="ri-xrp-fill bg-black hover:bg-red-500 rounded-sm p-1 text-white"></i>
            </button>
          </div>

          {/* cart details */}
          <div>
            {products.length === 0 ? (
              <p>Card is empty</p>
            ) : (
              products.map((item, index) => (
                <div key={index} className="relative">
                  {/* Button remove */}
                  <button
                    onClick={(e) => handleRemove(e, item._id)}
                    className="absolute top-0 right-0 z-10 hover:scale-115 transition-all duration-300"
                  >
                    <i className="ri-xrp-fill bg-primary text-white p-0.5 rounded-sm"></i>
                  </button>

                  {/* Item on cart */}
                  {/* id, image  */}
                  <div className="flex flex-col shadow-md p-2 mb-4 md:flex-row md:items-center md:gap-4 md:p-5 ">
                    <div className="flex ">
                      <p className="flex items-center">
                        <span className="mr-4 px-1 bg-primary text-white rounded">
                          {index + 1}
                        </span>
                      </p>
                      <img
                        src={item.image}
                        alt="item image"
                        className="!size-15 object-cover"
                      />
                    </div>
                    {/* price, quantity */}
                    <div>
                      <h5 className="text-lg font-medium">{item.name}</h5>
                      <p className="text-gray-600 text-sm">
                        ${Number(item.price).toFixed(2)}
                      </p>
                      <div className="flex">
                        <div>
                          <button
                            onClick={() =>
                              handleQuantity("decrement", item._id)
                            }
                            className="px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white "
                          >
                            -
                          </button>
                          <span className="px-2 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantity("increment", item._id)
                            }
                            className="px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white "
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* calculation money*/}
          {products.length > 0 && <OrderSummary />}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
