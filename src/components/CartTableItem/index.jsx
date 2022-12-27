import React from "react";
import {FaTrash} from "react-icons/fa";
import {Link} from "react-router-dom";
import {StyledCartTableItem} from "./cartTableItem.styled";
import {useCartDispatch} from "../../contexts/cart/cart.context";
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleDeleteCartItem,
} from "../../contexts/cart/cart.actions";
const CartTableItem = ({item}) => {
  const dispatch = useCartDispatch();

  return (
    <StyledCartTableItem className="cart-table-item row text-center py-3">
      <div style={{width: "25%"}}>
        <img src={item?.imgUrl} alt="product-img" width="80px" height="80px" />
      </div>
      <div
        className="d-flex flex-column justify-content-around"
        style={{width: "25%"}}
      >
        <Link to={`/shop/${item?.id}`}>{item?.name}</Link>
        <span className="text-muted">{item?.price}$</span>
      </div>

      <div style={{width: "25%"}}>
        <button onClick={() => dispatch(handleRemoveFromCart(item.id))}>
          -
        </button>{" "}
        <span>{item?.quantity} </span>
        <button onClick={() => dispatch(handleAddToCart(item))}>+</button>
      </div>
      <div style={{width: "25%"}}>
        <FaTrash
          color="red"
          size={20}
          cursor="pointer"
          onClick={() => dispatch(handleDeleteCartItem(item.id))}
        />
      </div>
    </StyledCartTableItem>
  );
};

export default CartTableItem;
