import React from "react";
import Alert from "../../components/Alert";
import CartTableItem from "../../components/CartTableItem";
import {useGetCartInfo} from "../../hooks/useGetCartInfo";
import {useCartDispatch} from "../../contexts/cart/cart.context";
import {handleClearCart} from "../../contexts/cart/cart.actions";
const CartTable = () => {
  const [totalQty, totalPrice, cart] = useGetCartInfo();
  const dispatch = useCartDispatch();

  console.log(cart);
  return (
    <div>
      {cart.length > 0 ? (
        <>
          <div className="row text-center bg-light py-3">
            {["Image", "Product", "Quantity", "Delete"].map((item, idx) => (
              <div className="" style={{width: "25%"}} key={idx}>
                <h6 className="mb-0">{item}</h6>
              </div>
            ))}
          </div>
          {/* _________________________________________ */}
          {cart.map((item) => (
            <CartTableItem item={item} key={item.id} />
          ))}
          <div className="my-3">
            <div
              className="bg-light text-primary p-2 ms-auto"
              style={{width: "250px"}}
            >
              <span>
                Total({totalQty} items) :{" "}
                <span className="">${totalPrice}</span>
              </span>
              <button
                className="btn btn-danger btn-sm w-100 mt-2"
                onClick={() => dispatch(handleClearCart(cart))}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <Alert message={"Cart Is Empty"} />
      )}
    </div>
  );
};

export default CartTable;
