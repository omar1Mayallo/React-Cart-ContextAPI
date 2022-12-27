import React from "react";
import {useNavigate} from "react-router-dom";
import {handleClearCart} from "../../contexts/cart/cart.actions";
import {useCartDispatch} from "../../contexts/cart/cart.context";
import {useGetCartInfo} from "../../hooks/useGetCartInfo";
import CartItem from "../CartItem";

const CartSidebar = () => {
  const [, totalPrice, cart] = useGetCartInfo();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Shopping Cart
        </h4>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body overflow-auto">
        {cart.length === 0 ? (
          <div className="alert alert-danger" role="alert">
            Cart is empty
          </div>
        ) : (
          cart?.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      {cart.length > 0 && (
        <p className="mx-2 my-1">Total Price : ${totalPrice}</p>
      )}
      <div className="p-2">
        <button
          className="btn btn-primary btn-sm w-100 mb-2"
          data-bs-dismiss="offcanvas"
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </button>
        {cart.length > 0 && (
          <button
            className="btn btn-danger btn-sm w-100"
            data-bs-dismiss="offcanvas"
            onClick={() => dispatch(handleClearCart(cart))}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
