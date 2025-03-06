// import OrderSummary from "./OrderSummary";

import { RiCloseFill } from "react-icons/ri";

const CartModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`flex bg-white rounded-l-md h-full overflow-y-auto flex-col transition-transform duration-500 w-[350px]  ${
        isOpen ? " translate-x-0" : " translate-x-full"
      }`}
    >
      <div className="p-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Your Cart</h4>
          <button
            onClick={() => onClose()}
            className="hover:scale-115 transition-all duration-300  bg-black hover:bg-red-500 rounded-sm p-1 text-white"
          >
            <RiCloseFill />
          </button>
        </div>

        {/* cart details */}
        <div>
          <p>Card is empty</p>
          {/* {products.length === 0 ? (
            <p>Card is empty</p>
          ) : (
            products.map((item, index) => (
              <div key={index} className="relative">
      
                <button
                  onClick={(e) => handleRemove(e, item._id)}
                  className="absolute top-0 right-0 z-10 hover:scale-115 transition-all duration-300 bg-primary text-white p-0.5 rounded-sm"
                >
                  <RiCloseFill />
                </button>

      
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
             
                  <div>
                    <h5 className="text-lg font-medium">{item.name}</h5>
                    <p className="text-gray-600 text-sm">
                      ${Number(item.price).toFixed(2)}
                    </p>
                    <div className="flex">
                      <div>
                        <button
                          onClick={() => handleQuantity("decrement", item._id)}
                          className="px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white "
                        >
                          -
                        </button>
                        <span className="px-2 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantity("increment", item._id)}
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
          )} */}
        </div>

        {/* calculation money*/}
        {/* {products.length > 0 && <OrderSummary />} */}
      </div>
    </div>
  );
};

export default CartModal;
