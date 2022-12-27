import {
  addToCart,
  clearCart,
  deleteCartItem,
  removeFromCart,
} from "./cart.utils";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_CART_ITEM,
  REMOVE_FROM_CART,
} from "./cart.actions.types";

export const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const cartReducer = (cart = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(action.payload, cart);

    case REMOVE_FROM_CART:
      return removeFromCart(action.payload, cart);

    case DELETE_CART_ITEM:
      return deleteCartItem(cart, action.payload);

    case CLEAR_CART:
      return clearCart(cart);

    default:
      return cart;
  }
};
