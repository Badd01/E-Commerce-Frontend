import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { RiDeleteBin7Line, RiBankCardLine } from "react-icons/ri";

const OrderSummary = () => {
  const dispatch = useDispatch();

  const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector(
    (store) => store.cart
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="bg-primary-light mt-5 rounded-sm ">
        <div className="px-6 py-4 space-y-2 ">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <p className="mt-2">Items: {selectedItems}</p>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <p>
            Tax({taxRate * 100}%): ${tax.toFixed(2)}
          </p>
          <p className="text-primary font-semibold">
            Grand Total: ${grandTotal.toFixed(2)}
          </p>
          <div className="mb-6 flex flex-col ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClearCart();
              }}
              className="order_btn bg-red-600 flex items-center justify-center gap-2"
            >
              Clear
              <RiDeleteBin7Line />
            </button>
            <button className="order_btn bg-green-600 flex items-center justify-center gap-2">
              Checkout
              <RiBankCardLine />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
