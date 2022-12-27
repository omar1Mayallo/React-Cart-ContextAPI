import React from "react";
import {useCartDispatch} from "../../contexts/cart/cart.context";
import {StyledCartItemStyled} from "./cartItem.styled";
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleDeleteCartItem,
} from "../../contexts/cart/cart.actions";
const CartItem = ({item}) => {
  const dispatch = useCartDispatch();
  return (
    <StyledCartItemStyled className="d-flex align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center">
        <img src={item.imgUrl} alt="product-img" width={110} />

        <div className="d-grid gap-4 ms-2">
          <span className="item-head">{item.name}</span>
          <span className="item-qty">
            <button onClick={() => dispatch(handleRemoveFromCart(item.id))}>
              -
            </button>{" "}
            {item.quantity}{" "}
            <button onClick={() => dispatch(handleAddToCart(item))}>+</button>
          </span>
        </div>
      </div>
      <div className="d-grid gap-4">
        <button
          className="closeBtn ms-auto"
          onClick={() => dispatch(handleDeleteCartItem(item.id))}
        >
          X
        </button>
        <span className="text-muted">${item.price}</span>
      </div>
    </StyledCartItemStyled>
  );
};

export default CartItem;
